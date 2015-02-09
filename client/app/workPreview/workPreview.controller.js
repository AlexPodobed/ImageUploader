'use strict';

angular.module('imageUploaderApp')
  .controller('workPreviewCtrl', function ($scope,$state, work, Work) {

    $scope.global = {
      work: work
    };

    $scope.removeWork = function(){
      var isRemove = confirm("Are you sure?");

      if(isRemove){
        console.dir(work)
        Work.remove({work_id: work._id}, function(){
          $state.go('main')
        })
      }
    }
  });
