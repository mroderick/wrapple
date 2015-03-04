(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.nativeWrap = factory();
    }
}(this, function () {
    return {
        location: function location() {
            return window.location;
        }
    };
}));
