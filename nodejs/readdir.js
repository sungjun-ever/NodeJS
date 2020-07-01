var testFolder = './data';
var fs = require('fs');

fs.readdir(testFolder, function(err, flielist){
    console.log(flielist);
})