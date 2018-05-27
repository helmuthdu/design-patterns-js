function Request () {
  this.url = ''
  this.method = ''
  this.payload = {}
}

function RequestBuilder () {
  this.request = new Request()
}

RequestBuilder.prototype.forUrl = function (url) {
  this.request.url = url
  return this
}

RequestBuilder.prototype.useMethod = function (method) {
  this.request.method = method
  return this
}

RequestBuilder.prototype.payload = function (payload) {
  this.request.payload = payload
  return this
}

RequestBuilder.prototype.build = function () {
  return this.request
}

module.exports = { RequestBuilder }
