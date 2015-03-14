(function () {
    'use strict';

    var assert = buster.assert,
        wrap = window.nativeWrap;

    buster.testCase('wrapple api', {
        'should have a location method that returns window.location': function () {
            assert.same(wrap.location(), window.location);
        }
    });
}());
