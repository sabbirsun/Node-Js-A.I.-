const express = require('express');
const app = express();
const PORT = 3001;

app.get("/", (req, res)=>{
    const id = req.query.id;
    const name = req.query.name;
    res.send(`Studen id is  : ${id}, Student name is  : ${name}`);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
