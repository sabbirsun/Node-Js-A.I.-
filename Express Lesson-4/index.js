const app = require('./app');
const PORT = process.env.PORT || 3000;  // Default to port 3000 if PORT isn't defined

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
