const fs = require("fs");

fs.readFile(process.argv[2],'utf8',(error,buffer) => {

    if(error){

        console.log(error.message);
        return;

    }
    let newArray = buffer.split('\n');

    console.log(newArray.length-1);
    
});
