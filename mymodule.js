
const fs = require('fs');
const path = require('path');



module.exports = (dir, filtertxt, callback) =>{
    fs.readdir(dir, (err, list)=> {
      if (err) {
        return callback(err)
      }
  
      list = list.filter((file)=> {   ///////not very understand
        return path.extname(file) === '.' + filtertxt
      })

  
      callback(null, list)
    })
  }




