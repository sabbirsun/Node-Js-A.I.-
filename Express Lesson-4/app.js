const express = require("express");
const app = express();  // Initialize express app
const userRouter = require("./routes/users.route");
app.use("/api/user",userRouter);

// Define some routes (optional, for testing purposes)



app.use("/register",(req, res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname+"/views/register.html");
});

app.get("/login", (req, res) => {
    res.cookie("name", "Sabbir"); // Wrap the name in quotes
    res.cookie("age", "30");
    res.clearCookie("name");
    res.append("id", "109");
    res.end(); // End the response after setting cookies
});

app.use('/', (req, res) => {
    res.statusCode = 200;
    res.sendFile(__dirname+"/views/index.html");
});


app.use((req, res)=>{
    res.send("<h1>404 !!! Not a valid url</h1>")
});

// app.post('/', (req, res) => {
//     res.send('Hello, world! Post');
//     res.end();
// });
// app.put('/', (req, res) => {
//     res.send('Hello, world!');
//     res.end();
// });
// app.delete('/', (req, res) => {
//     res.send('Hello, world!');
//     res.end();
// });

module.exports = app;
