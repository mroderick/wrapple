(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return factory(root);
        });
    } else if (typeof exports === 'object') {
        module.exports = factory(root);
    } else {
        root.wrapple = factory(root);
    }
}(typeof self !== 'undefined' ? self : global, function (root) {

    var names = [];
    function wrap(name) {
        if (names.indexOf(name) === -1) {
            names.push(name);
            wrap[name] = function () {
                return root[name];
            };
        }

        return wrap[name].call();
    }

    wrap.reset = function reset() {
        names.forEach(function (name) {
            delete wrap[name];
        });
        names = [];
    };

    return wrap;
}));
