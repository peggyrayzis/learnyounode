var fs = require('fs');
var myfile = process.argv[2];

fs.readFile(myfile, function finishedReading(err, mybuf){
	if(err) {console.log(err)};
	var str = mybuf.toString();
	console.log(str.split('\n').length-1);
})