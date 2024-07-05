const express = require('express');
const serverless= require('serverless-http');
const app = express();
const cors = require('cors');
const route= require('./Routers/routes');
require('./config');

const PORT = 5000;

app.use(cors());
app.use(express.json())

app.use(route);

app.use('./netlify/functions/api',route)

app.listen(PORT,()=>{
    console.log(`Server is connected on port ${PORT}`)
})

module.exports.handler = serverless(app)