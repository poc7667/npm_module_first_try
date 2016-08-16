'use strict';

var expect = require('chai').expect;
var app = require('../index');
var numFormatter = app.numFormatter;

describe('mathOperation', function() {
    it('shoul multiply 2 number', function () {
        var result = app.multiplyTwoNumber(3, 5);
        expect(result).to.equal(15);
    })
});

describe('#numFormatter', function() {
    it('should convert single digits', function() {
        var result = numFormatter(1);
        expect(result).to.equal('1');
    });

    it('should convert double digits', function() {
        var result = numFormatter(12);
        expect(result).to.equal('12');
    });

    it('should convert triple digits', function() {
        var result = numFormatter(123);
        expect(result).to.equal('123');
    });

});