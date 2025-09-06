const express = require("express");
const { getContacts, postContacts } = require("../Controllers/Contact");
const route = express.Router();

route.get('',function (req,res){
    res.send("Welcome")
})

route.get('/get-contact',getContacts)
route.post('/add-contact', postContacts )

module.exports = route;