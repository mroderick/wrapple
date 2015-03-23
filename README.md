# wrapple ![travis build](https://img.shields.io/travis/mroderick/wrapple.svg) ![dependencies](https://img.shields.io/david/mroderick/wrapple.svg) ![dependencies](https://img.shields.io/david/dev/mroderick/wrapple.svg)
Wrapper for browser natives to allow stubbing in unit tests.

Accessing natives through a thin wrapper makes stubbing possible, where it would otherwise be impossible.

* [Firefox doesn't allow writing to localStorage](https://github.com/cjohansen/Sinon.JS/issues/662)
* [Old-IE doesn't like having globals overwritten](https://github.com/algolia/writable-window-method)

## Usage

Access browser natives through wrapple

### Step 1
```javascript
// use whatever local name you like
var wrap = require('wrapple');

var hostname = wrap.location().hostname;
```

### Step 2

Stub wrapple methods in your tests
```javascript
sinon.stub(wrap, 'location', function(){
    return {
        hostname: 'wrapple.example.com'
    };
});
```

### Step 3

There is no step three, you're done



## License

MIT: http://mrgnrdrck.mit-license.org

## wrapple.jp

In no way affiliated with, but admiring [wrapple.jp](http://www.wrapple.jp)
