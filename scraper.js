//

// const express = require('express')
// const request = require('request')
// const cheerio = require('cheerio')

// const app = express()

// app.get('/', (req, res) => {
//     request('https://rocket-league.com/items/shop', (error, response, html) => {
//         if (!error && response.statusCode === 200) {
//             const $ = cheerio.load(html)
//             const divTags = $('.rlg-item-shop__item-content, .rlg-item-shop__item-content.--daily')
//             let htmlToPrint = ''
//             divTags.each((i, el) => {
//                 let text = $(el).text();
//                 let type = 'unknown';
//                 if ($(el).hasClass("rlg-item-shop__name")) type = 'item name';
//                 if ($(el).hasClass("rlg-item-shop__rarity")) type = 'rarity';
//                 if ($(el).hasClass("rlg-item-shop__color")) type = 'color';
//                 htmlToPrint += `<div> <p>Type: ${type}</p> <p>Text: ${text}</p> </div>`
//             });
//             res.send(htmlToPrint)
//         }
//     })
// })

// app.listen(3000, () => {
//     console.log('Server running on port 3000')
// })


// Serperates item info into its own <div>, seratated by <h1> tags

// const express = require('express')
// const request = require('request')
// const cheerio = require('cheerio')

// const app = express()

// app.get('/', (req, res) => {
//     request('https://rocket-league.com/items/shop', (error, response, html) => {
//         if (!error && response.statusCode === 200) {
//             const $ = cheerio.load(html)
//             const divTags = $('.rlg-item-shop__item-content, .rlg-item-shop__item-content.--daily')
//             let htmlToPrint = ''
//             divTags.each((i, el) => {
//                 let text = $(el).text()
//                 let textArray = text.split(" ")
//                 let h1 = "<div>"
//                 textArray.forEach((text) => {
//                     h1 += `<h1>${text}</h1>`
//                 })
//                 h1 += "</div>"
//                 htmlToPrint += h1
//             });
//             res.send(htmlToPrint)
//         }
//     })
// })

// app.listen(3000, () => {
//     console.log('Server running on port 3000')
// })


// Displays all text from item <div> tags. Displays color, item, rarity, and random number

const express = require('express')
const request = require('request')
const cheerio = require('cheerio')

const app = express()

app.get('/', (req, res) => {
    request('https://rocket-league.com/items/shop', (error, response, html) => {
        if (!error && response.statusCode === 200) {
            const $ = cheerio.load(html)
            const divTags = $('.rlg-item-shop__item-content, .rlg-item-shop__item-content.--daily')
            let htmlToPrint = ''
            divTags.each((i, el) => {
                htmlToPrint += `<h1>${$(el).text()}</h1>`
            });
            res.send(htmlToPrint)
        }
    })
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})


// Displays item names in their own <h1> tags

// const express = require('express')
// const request = require('request')
// const cheerio = require('cheerio')

// const app = express()

// app.get('/', (req, res) => {
//     request('https://rocket-league.com/items/shop', (error, response, html) => {
//         if (!error && response.statusCode === 200) {
//             const $ = cheerio.load(html)
//             const h1Tags = $('.rlg-item-shop__name, .rlg-h2.rlg-item-shop__name.--daily')
//             let htmlToPrint = ''
//             h1Tags.each((i, el) => {
//                 htmlToPrint += `<h1>${$(el).text()}</h1>`
//             });
//             res.send(htmlToPrint)
//         }
//     })
// })

// app.listen(3000, () => {
//     console.log('Server running on port 3000')
// })


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