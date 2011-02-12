var assert = require('assert');
var bigint = require('bigint');

exports.create = function () {
    assert.eql(bigint(1337).toString(), '1337');
    assert.eql(bigint('1337').toString(), '1337');
    assert.eql(new bigint('100').toString(), '100');
    assert.eql(
        new bigint('55555555555555555555555555').toString(),
        '55555555555555555555555555'
    );
    
    assert.eql(Number(bigint('1e+100').toString()), 1e+100);
    assert.eql(Number(bigint('1.23e+45').toString()), 1.23e+45);
};
