angular.module('imageUploaderApp')
  .factory('Work', ['$resource', function($resource){
      return $resource('api/works/:work_id', {work_id: "@work_id"}, {
          removeAllImgs: {method:'POST', params:{remove:true}}
      })
  }]);
