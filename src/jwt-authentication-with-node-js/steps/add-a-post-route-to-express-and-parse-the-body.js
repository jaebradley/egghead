const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8888;

// bodyParser middleware
// bodyParser is used to, well, parse the request body
app.use(bodyParser.json());

// POST route to handle login
app.post('/login', (req, res) => {
    // Will be using bodyParser middleware
    const user = req.body.username;
    res
    .status(200)
    .send(`You logged in with ${user}`);
});

app.get('/status', (req, res) => {
    const localTime = new Date().toLocaleTimeString();

    res
    .status(200)
    .send(`Server time is ${localTime}`);
});

app.get('*', (req, res) => {
    res.sendStatus(404);
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
