'use strict';

describe('Service: Authorservice', function () {

  // load the service's module
  beforeEach(module('stoogeBloggerzApp'));

  // instantiate service
  var Authorservice;
  beforeEach(inject(function (_Authorservice_) {
    Authorservice = _Authorservice_;
  }));

  it('should do something', function () {
    expect(!!Authorservice).toBe(true);
  });

});
