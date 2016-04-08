var filterModule = require('./module.js');
var fileDir = process.argv[2];
var findStr = process.argv[3];

filterModule(fileDir, findStr, function(err, list){
	if(err){console.log("Error: " + err)};
	list.forEach(function(file){
		console.log(file);
	})
})