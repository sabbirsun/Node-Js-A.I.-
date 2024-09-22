const express = require("express");
const app = express();  // Initialize express app
const userRouter = require("./routes/users.route");
app.use("/api/user",userRouter);

// Define some routes (optional, for testing purposes)

app.use('/', (req, res) => {
    res.send('Hello, world!');
    res.end();
});

app.use((req, res)=>{
    res.send("<h1>404 !!! Not a valid url</h1>")
})

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
