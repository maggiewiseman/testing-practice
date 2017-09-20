var chai = require('chai');
var expect = chai.expect;
var aThenB = require('../aThenb');

describe('a then b', function() {
    it('returns B for A', function() {
        expect(aThenB('A')).to.equal('B');
    });
    it('does not return B for something other than A', function() {
        expect(aThenB('X')).to.be.null;
    });
});
