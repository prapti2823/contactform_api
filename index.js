const express = require('express');
const app = express();
const cors = require('cors');
const route = require('./Routers/routes');
require('./config');

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Test route BEFORE other routes
app.get('/test', (req, res) => {
    res.json({ message: 'Server is working!' });
});

// Use routes with specific path
app.use('/api', route);

// Root route
app.get('/', (req, res) => {
    res.send('Contact Form API is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});