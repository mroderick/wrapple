(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.wrapple = factory();
    }
}(this, function () {
    var api = Object.create(null),
        names = [];

    api.add = function add(name) {
        if (names.indexOf(name) !== -1) {
            return;
        }

        names.push(name);
        api[name] = function () {
            return window[name];
        }

        return api[name].call();
    };

    api.reset = function reset() {
        names.forEach(function (name) {
            delete api[name];
        });
        names = [];
    };

    return api;
}));
