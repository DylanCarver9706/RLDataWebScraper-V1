const express = require('express');
const scraper = require('./scraper'); // import the web scraper code

const app = express();

app.get('/', async (req, res) => {
    const data = await scraper.scrapeData(); // call the scrapeData function from scraper.js
    res.send(data);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});