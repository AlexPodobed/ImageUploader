'use strict';

angular.module('imageUploaderApp')
  .controller('NewWorkCtrl', function ($scope, Work) {
    $scope.newWork = {};

    function createNewWork (){
      console.log($scope.newWork)
      var work = new Work($scope.newWork);
      work.$save(function(data){
        console.log(data)
      })
    }

    var works = Work.query(function(data){
      console.log(works);
    })
    $scope.createNewWork = createNewWork;
  });
