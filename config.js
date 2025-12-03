const mongoose = require('mongoose');

const data = mongoose.connect(process.env.MONDODB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Database connected successfully");
}).catch((error) => {
    console.log('Error in connecting the database: ', error);
});

module.exports = data;