const mongoose = require('mongoose');

const data = mongoose.connect("mongodb://0.0.0.0:27017/contact").then(()=>{
    console.log("Connected");
}).catch((error)=>{
    console.log('Error in connecting the database: ',error)
})

module.exports = data;