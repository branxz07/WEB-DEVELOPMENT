const fs = require('fs');

fs.writeFile('helloworld.txt', 'Hello World!', (err) => {

  if (err) return console.log(err);

  console.log('Hello World > helloworld.txt');

});

// make a neew file and write on it