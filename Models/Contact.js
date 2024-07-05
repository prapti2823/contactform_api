const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        number: {
            type: String,
            required: true,
        },
        message: {
            type: String,
        }
});

const contactDetails = mongoose.model("contact",contactSchema)

module.exports = contactDetails;