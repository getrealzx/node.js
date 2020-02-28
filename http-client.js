const http = require('http');

http.get(process.argv[2], (res) => {
    // Do stuff with response
    res.setEncoding('utf8');
    res.on('data',(data) => {
        console.log(data);
        
    })

  });
