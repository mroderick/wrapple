# Contributing

## Setting up

```
$ npm install
```

## EditorConfig

There's an `.editorconfig` file to be used with [EditorConfig](http://editorconfig.org). Please install a plugin for your editor, to help keep consistent encoding, line endings etc.

## Static analysis

### JSCS

This codebase uses [JSCS](http://jscs.info) with the [Crockford preset](https://github.com/jscs-dev/node-jscs/blob/master/presets/crockford.json).

You can verify the style using

```
$ npm run lint
```

### Js Beautifier

You can use [Js Beautifier](https://github.com/beautify-web/js-beautify) with the provided `.jsbeautifyrc` to format code to match the rules set out in the JSCS preset.

There are plenty of editor plugins for both of these tools. Here's what I use with Sublime Text 3: [JsFormat](https://github.com/jdc0589/JsFormat) for re-formatting code and [SublimeLinter](http://www.sublimelinter.com/) with the [SublimeLinter-jscs plugin](https://github.com/SublimeLinter/SublimeLinter-jscs) for linting.

## Unit Tests

Run tests in PhantomJS

```
$ npm run buster
```

If you're testing browser specific issues, like stubbing out localStorage in Firefox, it'd be a good idea to also run the tests in that browser.

See [BusterJS documentation](http://docs.busterjs.org/en/latest/) for more details.

## Pull Requests

Your pull requests will be built by TravisCI, and will fail if either static analysis or unit tests fail.

Once Travis goes green for your pull request, they will be reviewed.
