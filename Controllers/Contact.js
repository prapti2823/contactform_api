const contactDetails = require('../Models/Contact');

const getContacts = async(req,res) => {
    try{
        const details = await contactDetails.find();
        res.status(200).json({ message: "Data received successfully",data: details });
    }
    catch(error)
    {
        console.log('Error in getting the contact: ',error);
        res.status(400).json('Internal server error')
    }
}

const postContacts = async (req, res) => {
    try {
        const { name, email,number,message } = req.body;
        const details = await contactDetails.create({name,email,number,message});
        res.status(200).json({ message: "Data added successfully", data: details });
    }
    catch (error) {
        console.log('Error in getting the contact: ', error);
        res.status(400).json('Internal server error')
    }
}

module.exports = {getContacts,postContacts}