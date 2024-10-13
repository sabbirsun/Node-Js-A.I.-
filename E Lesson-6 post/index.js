const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post("/user", (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    res.send(`Welcome ${name}. Your age ${age}`);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
