// simplegrep_sync.js
//
// duplicates the base functionality of the UNIX grep command
// This version uses synchronous I/O.
//

var fs = require('fs')

if (process.argv.length < 4) {
  console.error('Not enough parameters given. Try this: ' +
                '"node simplegrep_sync term filename.txt"')
  process.exit(1)
}

var re       = new RegExp(process.argv[2])
var filename = process.argv[3]
var outfile  = process.argv[4]

var rawContents = fs.readFileSync(filename, 'utf-8')
var lines       = rawContents.split('\n')

var i
var output = ""
for (i = 0; i < lines.length; i++) {
  if (re.test(lines[i])) {
    output +=  lines[i] + '\n'
 }
}
fs.writeFileSync(outfile, output)
console.log('All done!')
