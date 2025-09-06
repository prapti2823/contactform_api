const mongoose = require('mongoose');

const data = mongoose.connect("mongodb+srv://praptishah2823:praptishah2823_U!@portfoliocontact.wp0gsg0.mongodb.net/").then(() => {
    console.log("Connected");
}).catch((error) => {
    console.log('Error in connecting the database: ', error)
})

module.exports = data;