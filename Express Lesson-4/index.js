const express = require('express');
const app =express(); //Random name
const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});


