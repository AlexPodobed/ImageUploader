'use strict';

angular.module('imageUploaderApp')
    .controller('NewWorkCtrl', function ($scope, $state, Work, toaster) {
        $scope.newWork = {};

        function createNewWork() {
            var work = new Work($scope.newWork);
            work.$save(function (data) {
                $scope.newWork = {};
                toaster.pop('success', "Success", "Информация успешно добавлена");
                $state.go('newWork.photos', {_id: data._id});
            });
        }
        $scope.createNewWork = createNewWork;
    });
