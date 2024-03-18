const express = require('express');
const cors = require('cors');

const issuesRouter = require('./routes/issuesRouter');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/issues', issuesRouter)

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = app;
