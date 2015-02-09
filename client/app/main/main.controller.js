'use strict';

angular.module('imageUploaderApp')
  .controller('MainCtrl', function ($scope, Work) {
      var works = Work.query(function(){
        $scope.works = works;
      });
  });
