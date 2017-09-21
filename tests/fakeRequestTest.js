var rewire = require('rewire');
var fake = rewire('../fakeRequest');

var expect = require('chai').expect;

describe('call to api/id path', function() {
    it('will have a certain object', function() {
        var mockAxios = function('get', '')
        expect(fake(5).to.have.members([{'object': 1}]));
    });
});
