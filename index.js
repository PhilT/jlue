#! /usr/bin/env node

var path = require('path')
var fs = require('fs')
var exec = require('child_process').exec

var folder = process.argv.slice(2)[0]
var template = path.join(__dirname, 'template')

var copyTemplate = function copyTemplate(action) {
  exec(`cp -RT ${template} ${folder}`, (err, stdout, stderr) => {
    if (err) throw err
    if (stderr) console.log(stderr)

    var basedir = path.basename(folder)
    //TODO: Need to get the fullpath here incase basedir is '.'
    exec(`sed -i 's/PROJECT_NAME/${basedir}/' ${path.join(folder, 'package.json')}`, (err, stdout, stderr) => {
      if (err) throw err
      console.log(`JavaScript project ${action} in ${folder}`)
    })
  })
}

try {
  stats = fs.statSync(folder)
  if (stats.isDirectory()) {
    copyTemplate('updated')
  } else {
    console.log(`$(folder) is not a folder`)
  }
} catch (e) {
  copyTemplate('created')
  console.log(`
    Run the following commands to get setup
    cd ${folder}
    npm install
  `)
}
