'use strict';

angular.module('imageUploaderApp')
  .controller('NavbarCtrl', function ($scope, $state,  $location) {
    $scope.state = $state;

    $scope.menu = [{
      'title': 'Home',
      'link': '/',
      'state': ''

    },{
      'title': 'newWork',
      'link': '/newWork/info',
      'state': 'newWork'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
