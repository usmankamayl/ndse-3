const http = require('http');
const {myAPIKey, port} = require('../../config.js');
const adress = process.argv[2];
const url = 
`http://api.weatherstack.com/current?access_key=${myAPIKey}
&query=${adress}`;

http.get(url, (res) => {
  res.setEncoding('utf8');
 let rawData = '';
 res.on('data', (chunk) => rawData += chunk);
 res.on('end', () => {
 let parsedData = JSON.parse(rawData);
 console.log(parsedData.current['temperature']);
 });

}).on('error', (e) => {
 console.error(`Got error: ${e.message}`);
});


