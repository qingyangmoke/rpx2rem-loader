# rpx2rem-loader

a [webpack](http://webpack.github.io/) loader for [rpx2rem](https://github.com/qingyangmoke/rpx2rem)

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Downloads][downloads-image]][downloads-url]

[npm-image]: https://img.shields.io/npm/v/rpx2rem-loader.svg
[npm-url]: https://npmjs.org/package/rpx2rem-loader
[travis-image]: https://img.shields.io/travis/qingyangmoke/rpx2rem-loader.svg
[travis-url]: https://travis-ci.org/qingyangmoke/rpx2rem-loader
[downloads-image]: http://img.shields.io/npm/dm/rpx2rem-loader.svg
[downloads-url]: https://npmjs.org/package/rpx2rem-loader

## Install

`npm install rpx2rem-loader`

## webpack config

```
module.exports = {
  // ...
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'rpx2rem-loader',
        // options here
        options: {
          remUnit: 100,
          remPrecision: 6
        }
      }]
    }]
  }
}
```

# thanks 
Please see [rpx2rem](https://github.com/qingyangmoke/rpx2rem) for more information about query parameters of rpx2rem.
