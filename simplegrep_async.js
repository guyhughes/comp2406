// simplegrep_async.js
//
// duplicates the base functionality of the UNIX grep command
// This version uses asynchronous I/O.
//

var fs = require('fs')

if (process.argv.length < 4) {
  console.error('Not enough parameters given. Try this: ' +
                '"node simplegrep_async term filename.txt"') 
  process.exit(1)
}
var re       = new RegExp(process.argv[2])
var filename = process.argv[3]
var outfile  = process.argv[4]

var output = []

var returnMatches = function(err, rawContents) {

  var lines = rawContents.split('\n')

  lines.forEach(function(theLine) {
    if (re.test(theLine)) {
      output.push(theLine)
    }
  })
  output.sort()
  fs.writeFile(outfile, output.join('\n'))
  console.log('All done!')
}

fs.readFile(filename, 'utf-8', returnMatches)
