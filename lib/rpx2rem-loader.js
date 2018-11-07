var loaderUtils = require('loader-utils')
var Rpx2rem = require('rpx2rem')

module.exports = function (source) {
  var options = loaderUtils.getOptions(this)
  var rpx2remIns = new Rpx2rem(options)
  return rpx2remIns.generateRem(source)
}
