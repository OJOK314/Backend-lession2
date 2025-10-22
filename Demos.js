const fs = require('fs')


//create file
fs.writeFile('./sample-two', 'learning is great', (err) =>{
    if (err) {
        
        console.log(err)
    } else {
        console.log('created file')
    }
})

//read file
fs.readFile('./sample.txt','utf8' ,(err,data) =>{
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }

})


//delete file
fs.unlink('./del.txt', (err) =>{
    if (err) {
        console.log(err)
        
    } else {
        console.log('delete file')
    }
})




















// import
// import addition from "./add.js"
// import multiply from "./multiply.js"

// const addition = require('./add');
// const multiply = require('./multiply');


// usage

// console.log("sum",addition(9,4))
// console.log("product", multiply(8,6))
