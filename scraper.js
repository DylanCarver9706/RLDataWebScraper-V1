// Displays whole page

const express = require('express')
const request = require('request')

const app = express()

app.get('/', (req, res) => {
    request('https://rocket-league.com/items/shop', (error, response, html) => {
        if (!error && response.statusCode === 200) {
            res.send(html)
        }
    })
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})