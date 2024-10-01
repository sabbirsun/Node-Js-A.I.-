const express = require('express');
const app = express();
const PORT = 3001;

app.get("/userID/:is/userAge/:age", (req, res)=>{
   const id = req.params.id;
   const age = req.params.age;

    // const id = req.query.id;
    // const name = req.query.name;
    // const {id , name} = req.query;
    res.send(`Studen id is  : ${id}, Student name is  : ${age}`);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
