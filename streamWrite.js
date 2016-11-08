var fs = require('fs');
var data = "i'm a noob yo !";

var writerStream = fs.createWriteStream('input.txt');

writerStream.write(data, 'UTF8');

writerStream.end();

writerStream.on('finish', function(){

    console.log('Write completed.');
});

writerStream.on('error', function(err){
    console.log(err.stack);
});

console.log('Program Ended');
