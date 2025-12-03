const mongoose = require('mongoose');

const connectionString = process.env.MONDODB_CONNECTION || "mongodb+srv://praptishah2823:praptishah2823_U!@portfoliocontact.wp0gsg0.mongodb.net/PortfolioDB";

const data = mongoose.connect(connectionString).then(() => {
    console.log("Database connected successfully");
}).catch((error) => {
    console.log('Error in connecting the database: ', error);
});

module.exports = data;