//#!usr/bin/env node
const fs = require('fs');
const rs = fs.createReadStream('./fs-path/mydata.txt');
const ws = fs.createWriteStream('./fs-path/data2.gz');
const zlib = require('zlib')
const gzip = zlib.createGzip();
rs.pipe(gzip).pipe(ws);

rs.pipe(ws);
/*stream.on('data', chunk => ws.write(chunk));
stream.on('end', () => {
  ws.close();
  console.log('ok');
})*/


/*ws.write('some text to data.text');
ws.end();


ws.on('finish', () => {
  console.log("Запись завершена");
 });
 ws.on('close', () => {
  console.log("Запись close");
 });
 ws.on('error', (err) => {
  console.log(err.stack);
 });*/

/*var length = 0;
stream.on('data', chunk => {
  length += chunk.length;
  console.log(`on data`)
});
stream.on('end', () => {console.log(`on end total length: ${length}`)});
console.log('start');*/