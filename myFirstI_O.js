var fs = require('fs');
var myfile = process.argv[2];
var mybuf = fs.readFileSync(myfile);
var str = mybuf.toString();

console.log(str.split('\n').length-1);
