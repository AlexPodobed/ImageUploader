'use strict';

describe('Controller: NewWorkCtrl', function () {

  // load the controller's module
  beforeEach(module('imageUploaderApp'));

  var NewWorkCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewWorkCtrl = $controller('NewWorkCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
