const fs = require("fs");

fs.readFile("file1.txt", (err, data) => {

    if (!err) {

        console.log('info in file: ' + data);

    } else {

        console.log(err);

    }

});

// read a file