/* Very minimal HTTP Server with no dependencies */
/*eslint no-console: 0*/

'use strict'

var http = require('http')
var fs = require("fs")
var url = require("url")
var mimes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript'
}

module.exports = http.createServer(function (request, response) {
  var uri = request.url.replace(/^\/$/, 'index.html')
  var filename = __dirname + '/public/' + uri
  var mimeType = mimes[filename.match(/\.\w+$/)] || 'text/plain'
  response.setHeader('Content-Type', mimeType)
  fs.createReadStream(filename)
  .on('error', () => { response.statusCode = 404; response.end('Page Not Found')})
  .pipe(response)
}).listen(process.env.npm_package_config_port || 80)

console.log('Server running on port ' + (process.env.npm_package_config_port || 80))
