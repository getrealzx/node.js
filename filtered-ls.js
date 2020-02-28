// console.log(process.argv);


const fs = require('fs');
const path = require('path');



fs.readdir(process.argv[2], (err,list)=>{

    if(err){
        console.log(error.message);
        return;
    }


    list.forEach((filename) => {
        if(path.extname(filename) == '.'+ process.argv[3]){
            console.log(filename);
        }
        
    })



})

