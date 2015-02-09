'use strict';

angular.module('imageUploaderApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('preview', {
        url: '/:id',
        templateUrl: 'app/workPreview/workPreview.html',
        controller: 'workPreviewCtrl',
        resolve: {
          work: function($stateParams, Work){
            return Work.get({work_id: $stateParams.id})
          }
        }
      })
      .state('preview.preview', {
        url: '/preview',
        templateUrl: 'app/workPreview/workPreviewPage.html'
      })
      .state('preview.editInfo', {
        url: '/edit',
        templateUrl: 'app/workPreview/workEditInfo.html',
        controller: 'workEditCtrl'
      });


  });
