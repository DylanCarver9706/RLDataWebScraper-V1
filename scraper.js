// Displays all text from item <div> tags. Displays color, item, rarity, and random number
// Next Steps: 
// 1. Get rid of the numbers using ChatGPT
//    change the code to where is only displays text from these html elements onto my page in its own <h1> tags, 
//    but it ignores text that has numbers in it: <div class="rlg-item-shop__item-content --daily"> and <div class="rlg-item-shop__item-content">
// 2. update the code in ChatGPT to ask it to search Google
//    using this criteria site:https://rl.insider.gg/en/pc Crimson Fennec ImportBody
//    The question could go like this:
//    Update the code to search google.com using this specific search but replace the term Rocket with the results of the web scraper one <h1> tag at a time: 
//    site:https://rl.insider.gg/en/pc Rocket
// then click the first link
// then grab the src link of the photo

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