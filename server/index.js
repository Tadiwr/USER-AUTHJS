const express = require('express');
const path = require('path');
const cors = require('cors');

const PORT = 8080 || process.env.PORT;
const app = express();

app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/index.htm'));
    console.log("Home route was hit!");
})

app.get('/login/:email/:password', (req, res) => {
    console.log(req.params.email);
    console.log(req.params.password);
    res.send("Success");
});

app.listen(PORT, () => {
    console.log(`Running @ http://localhost:${PORT}/`);
});