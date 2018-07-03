const express = require('express');

const app = express();
// execute "export PORT=3000" (or whatever your preferred port number is) on the command line
// to set an explicit port number via an environment variable
const PORT = process.env.PORT || 8888;

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
