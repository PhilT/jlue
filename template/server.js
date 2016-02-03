/*eslint no-console: 0*/

'use strict'

var http = require('http'),
    url = require("url"),
    path = require("path"),
    fs = require("fs")

module.exports = http.createServer(function (request, response) {
  var uri = url.parse(request.url).pathname,
      filename = path.join(process.cwd() + '/public', uri),
      mimes,
      found,
      inDirectory,
      fileRead

  mimes = {
    '.txt': 'text/plain',
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript'
  }

  found = function found(exists) {
    if (!exists) {
      response.writeHead(404, {'Content-Type': 'text/plain'})
      response.write('404 Not Found\n')
      response.end()
      return false
    } else {
      return true
    }
  }

  inDirectory = function isDirectory(filename) {
    if (fs.statSync(filename).isDirectory()) {
      return filename + 'index.html'
    } else {
      return filename
    }
  }

  fileRead = function readFile(err, file) {

    if (err) {
      response.writeHead(500, {"Content-Type": "text/plain"})
      response.write(err + "\n")
      response.end()
      return
    }

    var headers = {},
        contentType = mimes[path.extname(filename)]
    if (contentType) {
      headers["Content-Type"] = contentType
    }
    response.writeHead(200, headers)
    response.write(file, "binary")
    response.end()
  }

  fs.exists(filename, function handleFile(exists) {
    if (found(exists)) {
      filename = inDirectory(filename)
      fs.readFile(filename, "binary", fileRead)
    }
  })
}).listen(process.env.npm_package_config_port || 80)

console.log('Server running on port ' + (process.env.npm_package_config_port || 80))

