const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 8888;
// Instead of creating a database use this array of User objects
// Don't do in production
const users = [
    { id: 1, username: 'admin', password: 'admin' },
    { id: 2, username: 'guest', password: 'guest' },
];

app.use(bodyParser.json());

app.post('/login', (req, res) => {
    // Make sure request body is valid
    if (!req.body.username || !req.body.password) {
        res
        .status(400)
        .send('You need a username and password');
        return;
    }

    const user = users.find((u) => {
        return u.username === req.body.username && u.password === req.body.password;
    });

    if (!user) {
        res
        .status(401) // 401 is Unauthorized
        .send('User not found');
        return;
    }

    // Create a signed token
    // First parameter is JSON payload that is part of JWT
    // Second parameter is secret key
    // Third parameter is configuration options, like an expiration time
    const token = jwt.sign({
        sub: user.id,
        username: user.username,
    }, 'mysupersecretkey', { expiresIn: '3 hours' });

    res
    .status(200)
    .send({ access_token: token });
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
