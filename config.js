const mongoose = require('mongoose');

const data = mongoose.connect(process.env.MONDODB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Database connected successfully");
}).catch((error) => {
    console.log('Error in connecting the database: ', error);
});
// }"mongodb+srv://praptishah2823:praptishah2823_U!@PortfolioContact.wp0gsg0.mongodb.net/PortfolioDB?retryWrites=true&w=majority",{
// useNewUrlParser: true,
// useUnifiedTopology: true,
// }
module.exports = data;