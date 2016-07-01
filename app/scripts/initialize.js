'use strict';

var $jetDeferred;
var jetInit;

function defer() {
  var deferred = {};
  var callbacks = [];
  var solved = false;
  var cacheArg;
  deferred.promise = {
    then: function (callback) {
      if (solved === true) {
        setTimeout(function () {
          callback(cacheArg);
        }, 0);
      }
      callbacks.push(callback);
    },
  };
  deferred.resolve = function (arg) {
    callbacks.forEach(function (callback) {
      callback(arg);
    });
    solved = true;
    cacheArg = arg;
  };
  return deferred;
}

$jetDeferred = new defer();
window.$jetPromise = $jetDeferred.promise;

function jetLoaded() {
  clearTimeout(jetInit);
  window.$jetDeferred.resolve();
}

if (window.EikonNow) {
  window.EikonNow.init();
}

if (window.JET) {
  JET.onLoad(jetLoaded);
  JET.onError(function () {
    clearTimeout(jetInit);
    window.$jetDeferred.resolve();
  });

  jetInit = setTimeout(function () {
    window.$jetDeferred.resolve();
  }, 2000);

  JET.init({
    ID: 'AngularAppSeed',
    Title: 'HPG Angular AppSeed',
    Summary: 'HPG Angular AppSeed',
    HelpURL: 'cpurl://apps.cp./apps/HelpViews',
    Toolbar: {
      commandBars: [{
        items: [{
          item: 'Search',
          id: 'true',
        }],
      }],
    },
  });
} else {
  window.$jetDeferred.resolve();
}
