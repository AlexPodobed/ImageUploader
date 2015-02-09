'use strict';

angular.module('imageUploaderApp')
  .controller('workEditCtrl', function ($scope, Work) {
    $scope.new_work = {};

    $scope.global.work.$promise.then(defineWork);

    function defineWork(work) {
      $scope.new_work = angular.copy(work)
    }

    $scope.update = function () {

      var body = {
        description: $scope.new_work.description,
        heading: $scope.new_work.heading
      };

      Work.save({work_id: $scope.new_work._id}, body, function () {
        console.log('OK');
        $scope.global.work = $scope.new_work
      });

    };

    $scope.cancel = function () {
      defineWork($scope.global.work)
    }

  });
