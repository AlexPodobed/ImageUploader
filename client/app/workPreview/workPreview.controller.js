'use strict';

angular.module('imageUploaderApp')
  .controller('workPreviewCtrl', function ($scope,$state, work, Work, toaster) {

    $scope.global = {
      work: work
    };

    $scope.removeWork = function(){
      var isRemove = confirm("Are you sure?");

      if(isRemove){
        Work.remove({work_id: work._id}, function(){
            toaster.pop('success', "Success", "Работа удалена");
            $state.go('main')
        })
      }
    }
  });
