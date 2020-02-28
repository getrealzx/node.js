const mymodule = require('./mymodule.js')
const dir = process.argv[2]
const filtxt = process.argv[3]

mymodule(dir, filtxt, (err, list) =>{
  if (err) {
    return console.error;
  }

  list.forEach((file)=> {
    console.log(file)
  })
})