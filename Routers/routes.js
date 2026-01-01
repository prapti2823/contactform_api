const express = require("express");
const { getContacts, postContacts, markAsRead } = require("../Controllers/Contact");
const { adminLogin } = require("../Controllers/Admin");
const { authenticateToken } = require("../middleware/auth");
const route = express.Router();

route.get('',function (req,res){
    res.send("Welcome")
})

// Admin routes
route.post('/admin/login', adminLogin);

// Contact routes
route.get('/contacts', authenticateToken, getContacts); // Protected route
route.post('/contact', postContacts); // Public route
route.patch('/contacts/:id/read', authenticateToken, markAsRead); // Protected route

// Legacy routes (keeping for backward compatibility)
route.get('/get-contact', authenticateToken, getContacts);
route.post('/add-contact', postContacts);

module.exports = route;