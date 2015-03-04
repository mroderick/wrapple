(function () {
    'use strict';

    var assert = buster.assert,
        wrap = window.nativeWrap;

    buster.testCase('location method', {
        'should return window.location': function () {
            assert.same(wrap.location(), window.location);
        }
    });
}());
