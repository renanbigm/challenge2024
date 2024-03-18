const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = app;
