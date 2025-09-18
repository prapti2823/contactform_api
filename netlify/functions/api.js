const express = require('express');
const serverless = require('serverless-http');
const app = express();
const cors = require('cors');
const route = require('../../Routers/routes');
require('../../config');

app.use(cors());
app.use(express.json())

// app.use(route);

app.get("/test", (req, res) => {
    res.json({ message: "Test route working ✅" });
});

// mount your main routes
app.use('/', route)

// app.listen(PORT,()=>{
//     console.log(`Server is connected on port ${PORT}`)
// })

module.exports.handler = serverless(app)