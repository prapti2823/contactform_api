const express = require('express');
const app = express();
const cors = require('cors');
const route = require('./Routers/routes');
require('./config');

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Test route
app.get('/test', (req, res) => {
    res.json({ message: 'Server is working!' });
});

app.use('/', route);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});