# wrapple ![travis build](https://img.shields.io/travis/mroderick/wrapple.svg) ![dependencies](https://img.shields.io/david/mroderick/wrapple.svg) ![dependencies](https://img.shields.io/david/dev/mroderick/wrapple.svg)
Dependency free wrapping function for browser natives to allow stubbing in unit tests.

Accessing natives through a thin wrapper makes stubbing possible, where it would otherwise be impossible.

* [Firefox doesn't allow writing to localStorage](https://github.com/cjohansen/Sinon.JS/issues/662)
* [Old-IE doesn't like having globals overwritten](https://github.com/algolia/writable-window-method)

You can use it with pretty much all globals defined on the `window` object.

#### Link Seam

In [Working Effectively with Legacy Code](http://www.informit.com/store/working-effectively-with-legacy-code-9780131177055), Michael Feathers describes *[Seams](http://www.informit.com/articles/article.aspx?p=359417)*. In the vernacular of that book, `wrapple` would most likely be described as a *Link Seam*.

## Compatibility

`wrapple` should be able to run in most environments that can execute JavaScript

### ES5.1 required
wrapple uses a couple of methods from ES5.1

* [`Array.prototype.indexOf()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
* [`Array.prototype.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

If you need to support old browsers, you should ensure that these have been polyfilled.

### Node.js supported

`wrapple` can work in Node.js environments just like in browser environments.

## Usage

Access browser natives through wrapple

### Step 1
```javascript
// use whatever local name you like
var wrap = require('wrapple');

// ensure that wrapple has wrapped the property you're interested in
// this is idempotent, call it many times with no ill effects
wrap('location');

// directly use the returned global
var hostname = wrap('location').hostname;
```

### Step 2

Now that your application code is using wrapped globals, you can target the wrapper function for stubbing, spying, etc.

```javascript
var stub = sinon.stub(wrap, 'location', function(){
    return {
        hostname: 'wrapple.example.com'
    };
});

// ...
```

### Step 3

Tidy up your tests

```javascript
// using sinon
stub.restore();

// or using wrapple.reset
wrap.reset();
```

## Methods

### `wrap`
```javascript
// wrap - adds a wrapped property method to the wrapple api
// returns a function that returns window.location
// also creates wrap.location method as target for stubbing
wrap('location');

// add and use immediately
var hostname = wrap('location').hostname;

// use via dedicated method
wrap('location');
// ...
var hostname = wrap.location().hostname;
```

### `reset`
```javascript
// reset, removes all wrapper methods from wrapple api
wrap.reset();
```


## Unwrappable methods
These **globals** on the `window` object are not wrappable, as creating the returning methods on `wrapple` would interfere with the `wrap` function.

* `constructor`
* `isPrototypeOf`
* `length`
* `name`
* `propertyIsEnumerable`
* `toLocaleString`
* `toString`

That shouldn't be too much of a problem, as they seem unlikely targets for stubbing.

## Links

* [Sinon.JS](http://sinonjs.org)
* [Test-Driven JavaScript Development](http://tddjs.com)

## License

MIT: http://mrgnrdrck.mit-license.org

## wrapple.jp

In no way affiliated with, but admiring [wrapple.jp](http://www.wrapple.jp)
