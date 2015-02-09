'use strict';

angular.module('imageUploaderApp')
  .controller('NewWorkCtrl', function ($scope, $state, Work) {
    $scope.newWork = {};

    function createNewWork (){
      console.log($scope.newWork)

      var work = new Work($scope.newWork);
      work.$save(function(data){
        $scope.newWork = {};
        $state.go('newWork.photos', {_id: data._id});
      });
    }

    $scope.createNewWork = createNewWork;
  })
  .controller('NewWorkCtrlUploadPhotos', ['$scope', '$state',  function($scope, $state){


  }]);


