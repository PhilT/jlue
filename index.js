#! /usr/bin/env node

var path = require('path')
var fs = require('fs')
var exec = require('child_process').exec

var folder = process.argv.slice(2)[0]
var template = path.join(__dirname, 'template')
try {
  stats = fs.statSync(folder)
  if (stats.isDirectory()) {
    console.log('Updating existing projects not yet implemented')
  } else {
    console.log(`$(folder) is not a folder`)
  }
} catch (e) {
  exec(`cp -R ${template} ${folder}`, (err, stdout, stderr) => {
    if (err) throw err
    if (stderr) console.log(stderr)

    var basedir = path.basename(folder)
    exec(`sed -i 's/PROJECT_NAME/${basedir}/' ${path.join(folder, 'package.json')}`, (err, stdout, stderr) => {
      if (err) throw err
      console.log(`JavaScript project created in ${folder}`)
      console.log(`
        Run the following commands to get setup
        cd ${folder}
        npm install
      `)
    })
  })
}

