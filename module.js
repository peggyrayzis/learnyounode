var fs = require('fs');
var path = require('path');

module.exports = function(fileDir, findStr, callback){
	fs.readdir(fileDir, function(err, list){
		if(err){
			return callback(err)
		}
		list = list.filter(function(file){
			return path.extname(file) === "." + findStr
		})
		callback(null,list)
	})

}
