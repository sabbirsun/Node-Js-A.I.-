const express = require("express");
const app = express();  // Initialize express app

// Define some routes (optional, for testing purposes)
app.get('/', (req, res) => {
    res.send('Hello, world!');
});
app.post('/about', (req, res) => {
    res.send('Hello, world! About');
});
app.put('/', (req, res) => {
    res.send('Hello, world!');
});
app.delete('/', (req, res) => {
    res.send('Hello, world!');
});

module.exports = app;
