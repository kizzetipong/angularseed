<!doctype html>
<html class="no-js">
  <head>
    <meta charset="utf-8">
    <title>HPG Angular Seed</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">
    <!-- build:css(.tmp) web/assets/css/app.css -->
    <link rel="stylesheet" href="assets/css/app.css">
    <!-- endbuild -->
  </head>
  <body ng-app="angular-seed">
    <div class="app-container" ng-view=""></div>

    <!-- build:js({.,app}) web/scripts/bootstrap.js -->

    <script src="scripts/initialize.js"></script>
    <!-- endbuild -->

    <!-- build:js({.,app}) web/scripts/vendor.js -->
    <!-- bower:js -->
    <!-- endbower -->
    <!-- endbuild -->

    <!-- build:js({.tmp,app}) web/scripts/app.js -->
    <script src="scripts/appModule.js"></script>
    <script src="scripts/appRoute.js"></script>
    <script src="scripts/appConfig.js"></script>
    <script src="scripts/controllers/mainController.js"></script>
    <script src="scripts/services/myService.js"></script>
    <script src="scripts/components/mydirective/myDirective.js"></script>
    <script src="templates.js"></script>
    <!-- endbuild -->

    <!-- build:development -->
    <script src="http://localhost:35729/livereload.js"></script>
    <!-- endbuild -->

</body>
</html>
