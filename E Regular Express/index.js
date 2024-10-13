const express = require("express");
const app = express();

// Route for exactly three-digit product IDs
app.get("/products/id/:id([0-9]{3})", (req, res) => {
    res.send(`<h2> ID = ${req.params.id} </h2>`);
});

// Route for alphabetic product titles
app.get("/products/title/:title([a-zA-Z0-9]+)", (req, res) => {
    res.send(`<h2> Title = ${req.params.title} </h2>`);
});

// Catch-all route for undefined paths (404 Not Found)
app.use("*", (req, res) => {
    res.status(404).send({
        message: "Not a valid route",
    });
});

// Server listening on port 3000
app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});
