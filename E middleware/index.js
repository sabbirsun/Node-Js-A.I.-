const express = require('express');
const app = express();
const PORT = 3000;

// Custom middleware function
const myMiddleware = (req, res, next) => {
    console.log("Middleware function");
    req.currentTime = new Date(Date.now());
    next();
}

// Routes with middleware
app.get("/", myMiddleware, (req, res) => {
    console.log("I am a boy. " + req.currentTime);
    res.send("Hello World!");
});

app.get("/about", myMiddleware, (req, res) => {
    console.log("I am about route. " + req.currentTime);
    res.send("I am about route!");
});

// Catch-all middleware for 404 errors (should be defined last)
app.use((req, res) => {
    res.status(404).send("404 bad url request");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
