const mongoose = require('mongoose');

const data = mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected");
}).catch((error) => {
    console.log('Error in connecting the database: ', error)
})
// }"mongodb+srv://praptishah2823:praptishah2823_U!@portfoliocontact.wp0gsg0.mongodb.net/",{
// useNewUrlParser: true,
// useUnifiedTopology: true,
// }

module.exports = data;