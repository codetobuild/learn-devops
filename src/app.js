const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// health API endpoint
app.get('/health', (req, res) => {
    return res.status(200).json({ status: 'UP' });
});

app.use((err, req, res, next) => {
    return res.status(500).json({error: "Server Error"});
})

module.exports = app;
