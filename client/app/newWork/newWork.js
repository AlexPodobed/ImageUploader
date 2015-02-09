'use strict';

angular.module('imageUploaderApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('newWork', {
        url: '/newWork',
        templateUrl: 'app/newWork/newWork.html',
        controller: 'NewWorkCtrl'
      })
      .state('newWork.info', {
        url: '/info',
        templateUrl: 'app/newWork/newWorkInfo.html'
      })
      .state('newWork.photos', {
        url: '/photos/:_id',
        templateUrl: 'app/newWork/newWorkPhotos.html',
        controller: 'NewWorkCtrlUploadPhotos'
      });


  });
