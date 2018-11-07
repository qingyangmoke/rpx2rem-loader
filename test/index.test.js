'use strict';

var assert = require('assert');
var loader = require('../lib/rpx2rem-loader')
var path = require('path');
var fs = require('fs');

describe('should work with css file', function () {
  var srcPath = path.resolve('./static/assets/test.1.css');
  var srcText = fs.readFileSync(srcPath, {
    encoding: 'utf8'
  });

  it('[default] should output right rem file', function () {
    var expectedPath = path.resolve('./static/output/test.1.css');
    var outputText = loader.call({}, srcText);
    assert.equal(outputText, fs.readFileSync(expectedPath, {
      encoding: 'utf8'
    }));
  });

  it('should support `remUnit` query', function () {
    assert.equal(loader.call({
      query: '?remUnit=10'
    }, 'body {width: 640rpx}'), 'body {\n  width: 64rem;\n}')
  });

  it('should support `remPrecision` query', function () {
    assert.equal(loader.call({
      query: '?remPrecision=2'
    }, 'body {width: 1.2rpx}'), 'body {\n  width: 0.01rem;\n}')
  });

  it('should support `remUnit` & `remPrecision` query', function () {
    assert.equal(loader.call({
      query: '?remUnit=10&remPrecision=2'
    }, 'body {width: 1.23rpx}'), 'body {\n  width: 0.12rem;\n}')
  });
});