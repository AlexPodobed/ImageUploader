'use strict';

angular.module('imageUploaderApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'textAngular',
  'angularFileUpload'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
