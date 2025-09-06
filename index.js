const express = require('express');
const app = express();
const cors = require('cors');
const route = require('./Routers/routes');
require('./config');

const PORT = 5000;

app.use(cors());
app.use(express.json())

// app.use(route);

app.use('/', route)

// app.listen(PORT,()=>{
//     console.log(`Server is connected on port ${PORT}`)
// })

if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Local API running at http://localhost:${PORT}`);
    });
}