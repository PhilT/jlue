'use strict';

var compile = require('slm').compile
var fs = require('fs')
var path = require('path')

var from = process.argv[2]
var to = process.argv[3]

if (!from) {
  console.log('slm.js <from> <to>')
  process.exit(1)
}

var processDir = function processDir(from, to) {
  try { fs.mkdirSync(to) } catch (e) {}
  fs.readdir(from, (err, files) => {
    files.forEach( (file) => {
      var filepath = path.join(from, file)
      fs.stat(filepath, (err, stats) => {
        if (stats.isDirectory()) {
          processDir(filepath, path.join(to, file))
        } else if(path.extname(filepath) == '.slm') {
          fs.writeFileSync(
            path.join(to, path.basename(filepath, '.slm')) + '.html',
            compile(fs.readFileSync(filepath).toString())()
          )
        }
      })
    })
  })
}

processDir(from, to)

