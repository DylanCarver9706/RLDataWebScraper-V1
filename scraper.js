// Displays item names in their own <h1> tags

const express = require('express')
const request = require('request')
const cheerio = require('cheerio')

const app = express()

app.get('/', (req, res) => {
    request('https://rocket-league.com/items/shop', (error, response, html) => {
        if (!error && response.statusCode === 200) {
            const $ = cheerio.load(html)
            const h1Tags = $('.rlg-item-shop__name, .rlg-h2.rlg-item-shop__name.--daily')
            let htmlToPrint = ''
            h1Tags.each((i, el) => {
                htmlToPrint += `<h1>${$(el).text()}</h1>`
            });
            res.send(htmlToPrint)
        }
    })
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})


// Displays item names only

// const express = require('express')
// const request = require('request')
// const cheerio = require('cheerio')

// const app = express()

// app.get('/', (req, res) => {
//     request('https://rocket-league.com/items/shop', (error, response, html) => {
//         if (!error && response.statusCode === 200) {
//             const $ = cheerio.load(html)
//             const text1 = $('.rlg-item-shop__name').text()
//             const text2 = $('.rlg-h2.rlg-item-shop__name.--daily').text()
//             res.send("<h1>" + text1 + "</h1>" + "<h1>" + text2 + "</h1>")
//         }
//     })
// })

// app.listen(3000, () => {
//     console.log('Server running on port 3000')
// })


// Displays whole page

// const express = require('express')
// const request = require('request')

// const app = express()

// app.get('/', (req, res) => {
//     request('https://rocket-league.com/items/shop', (error, response, html) => {
//         if (!error && response.statusCode === 200) {
//             res.send(html)
//         }
//     })
// })

// app.listen(3000, () => {
//     console.log('Server running on port 3000')
// })