const fs = require('fs');

const readStream = fs.createReadStream('./docs/doc1.txt', { encoding: 'utf-8' });
const writeStream = fs.createWriteStream('./docs/writeStream.txt');

// readStream.on('data', (chunk) => {
//   console.log('_________ NEW DATA_________ \n');
//   console.log(chunk);
//   writeStream.write('\nNEW DATA\n');
//   writeStream.write(chunk);
// });

//cleaner way to read a stream and write the stream using PIPE
readStream.pipe(writeStream);
