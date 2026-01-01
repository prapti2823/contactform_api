const contactDetails = require('../Models/Contact');

const getContacts = async(req,res) => {
    try{
        const details = await contactDetails.find().sort({ createdAt: -1 });
        res.status(200).json({ message: "Data received successfully",data: details });
    }
    catch(error)
    {
        console.log('Error in getting the contact: ',error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const postContacts = async (req, res) => {
    try {
        const { name, email, number, message } = req.body;
        
        const details = await contactDetails.create({
            name,
            email,
            number,
            message,
            createdAt: new Date(),
            isRead: false
        });
        
        res.status(200).json({ message: "Data added successfully", data: details });
    }
    catch (error) {
        console.log('Error in adding contact: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const markAsRead = async (req, res) => {
    try {
        const { id } = req.params;
        
        const updatedContact = await contactDetails.findByIdAndUpdate(
            id,
            { isRead: true },
            { new: true }
        );
        
        if (!updatedContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        
        res.status(200).json({ message: 'Contact marked as read', data: updatedContact });
    }
    catch (error) {
        console.log('Error marking contact as read: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {getContacts, postContacts, markAsRead}