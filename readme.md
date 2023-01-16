ChatGPT Instructions:

Sure, here are the steps to set up a new JavaScript project that uses the code I provided earlier to scrape the website https://rocket-league.com/items/shop and display the scraped content on a webpage:

Open VS Code and create a new folder for your project.

In the terminal, navigate to your project folder and run the command npm init to create a new package.json file. Fill in the prompts as desired.

Run the command npm install express request cheerio to install the required packages.

Create a new file in your project folder, for example scraper.js

Copy the code I provided into scraper.js

In the terminal, run the command node scraper.js to execute the script.

Once the script has run, you should see the message "Server running on port 3000" in the console, and you can navigate to http://localhost:3000 in your browser to see the scraped content displayed on the webpage.

Please note that you may need to set up your Node.js development environment and install Node.js on your computer, if you haven't already done so.
Also, please be aware of the website's terms of service, some website may block scraping on their website.

What I asked ChatGPT:

can you create code that scraps this website url=https://rocket-league.com/items/shop for an html a tag that contains a class="rlg-item-shop__item --daily" and displays it on the webpage in node.js javascript?

(Edited a few things in the questions...)

can you change the code the extract the text from these html elements instead: <div class="rlg-item-shop__image-meta "> and <h1 class="rlg-item-shop__name"></h1>

can you pair the extracted text together when its displayed? for example: the first and seconds piece of text put together, then the third and fourth, and so on