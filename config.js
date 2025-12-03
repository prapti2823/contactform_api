const mongoose = require('mongoose');

console.log('Environment variable MONDODB_CONNECTION:', process.env.MONDODB_CONNECTION);

const connectionString = process.env.MONDODB_CONNECTION || "mongodb+srv://praptishah2823:praptishah2823_U!@portfoliocontact.wp0gsg0.mongodb.net/PortfolioDB";

console.log('Using connection string:', connectionString);

const data = mongoose.connect(connectionString).then(() => {
    console.log("Database connected successfully");
}).catch((error) => {
    console.log('Error in connecting the database: ', error);
});

module.exports = data;