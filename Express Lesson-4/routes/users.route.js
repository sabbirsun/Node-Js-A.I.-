const express = require('express');
const router = express.Router();



router.get('/register', (req, res) => {
    res.send('Hello, world! I am a get request at register route');
    res.end();
});
router.get('/login', (req, res) => {
    res.send('Hello, world! I am a get request at login route');
    res.end();
});

module.exports = router;