const request = require('request');
const fs = require('fs');

const arg = process.argv.slice(2);

request(arg[0], (error, response, body) => {
  fs.writeFile(arg[1], body, error => {
    if (error) {
      return error;
    };
    console.log(`Downloaded and saved ${body.length} bytes to ${arg[1]}`);
  })
});