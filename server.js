const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

//Middleware to parse JSON requests
app.use(express.json());

app.get('/api/posts', (req, res) => {
    res.json([{id:1, title: "First Post", content: "This is the first post"}]);
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});