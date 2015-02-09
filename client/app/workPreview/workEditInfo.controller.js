'use strict';

angular.module('imageUploaderApp')
    .controller('workEditCtrl', function ($scope,$state, Work, toaster) {
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
                $scope.global.work = $scope.new_work;
                toaster.pop('success', "Success", "Информация успешно обновлена");
            });

        };

        $scope.cancel = function () {
            defineWork($scope.global.work)
        };

        $scope.removeAllImages = function(){
            Work.removeAllImgs({work_id: $scope.new_work._id}, function(){
                console.log('OK');
                toaster.pop('warning', "Success", "Фотографии удалены");


                $state.go('preview.preview', {}, {reload: true})
            })
        };

    });
