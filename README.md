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

// ensure that wrapple has wrapped the property you're interested in
// this is [idempotent](http://en.wikipedia.org/wiki/Idempotence), call it many times with no ill effects
wrap.add('location');

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

## Methods

```javascript
// add, adds a wrapped property to the wrapple api
wrap.add('location');

// reset, removes all wrapper methods from wrapple api
wrap.reset();

// add and use immediately
var hostname = wrap.add('location').hostname;
```

## ES5.1 required

wrapple uses [`Object.create`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create) to create an object without *any* properties.

If you need to support old browsers, you should probably ensure that `Object.create` has been polyfilled.


## License

MIT: http://mrgnrdrck.mit-license.org

## wrapple.jp

In no way affiliated with, but admiring [wrapple.jp](http://www.wrapple.jp)
