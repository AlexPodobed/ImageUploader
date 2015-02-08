'use strict';

angular.module('imageUploaderApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('newWork', {
        url: '/newWork',
        templateUrl: 'app/newWork/newWork.html',
        controller: 'NewWorkCtrl'
      })
      .state('newWork.info.photos', {
        url: '/photos',
        templateUrl: 'app/newWork/newWorkPhotos.html',
        controller: 'NewWorkCtrl'
      })
      .state('newWork.info', {
        url: '/info',
        templateUrl: 'app/newWork/newWorkInformaton.html',
        controller: 'NewWorkCtrl'
      })
  });
