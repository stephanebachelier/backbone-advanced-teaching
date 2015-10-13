
# HTML5 Webapp boilerplate

## Why another boilerplate

KISS:

 * No assumption is made on whatever JS libraries or framework you use.
 * Use SASS or SCSS
 * Wired to use bourbon and neat but you can remove them pretty easily (only two @imports in main.scss)
 * Lots of tasks to produce a fully optimised and minified build of your work with usemin, uglifyjs, cssmin, htmlmin, imagemin and svgmin.

## How to install

You need to have `bower` and `grunt-cli` installed prior to use this boilerplate.
They should be installed globally using `-g` flag.

```js
$ npm install -g bower
$ npm install -g grunt-cli
```

Then you just need to run these commands:
```js
$ npm install
$ bower install # if you want bourbon and neat
```

## How to use

### Development

```js
$ grunt serve
```

### Production (broken for now)

```js
$ grunt build
$ grunt serve:dist
```

## How to install a frontend library or framework ?

To install jquery you should write:

```js
$ bower install --save jquery
$ grunt wiredep
```

Last line is important to have some magic.
