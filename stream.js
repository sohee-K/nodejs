const fs = require('fs');

const myReadStream = fs.createReadStream(__dirname + '/data/readMe.txt', 'utf8');
const myWriteStream = fs.createWriteStream(__dirname + '/data/writeMe.txt');

myReadStream.pipe(myWriteStream);

/*
myReadStream.pipe(response);

myReadStream.on('data', (chunk) => {
    console.log('New chunk received');
    myWriteStream.write(chunk);
})
*/