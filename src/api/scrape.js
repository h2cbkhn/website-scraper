const scrape = require('website-scraper');
const PuppeteerPlugin = require('website-scraper-puppeteer');

export default { 

  async scrape(req, res) {
    const url = req.query.url || 'themes'
    const options = {
      urls: [
        // 'http://www.ansonika.com/vanno/',
        {url: 'http://www.ansonika.com/vanno/confirm.html', filename: 'confirm.html'},
        {url: 'http://www.ansonika.com/vanno/category-companies-listings-filterstop.html', filename: 'category-companies-listings-filterstop.html'},
        {url: 'http://www.ansonika.com/vanno/help.html', filename: 'help.html'},
      ],
      directory: '/minhpv/website-scraper/themes/tmp',
      plugins: [ 
        new PuppeteerPlugin({
          launchOptions: { headless: false }, /* optional */
          scrollToBottom: { timeout: 10000, viewportN: 1 } /* optional */
        })
      ]
    };
    const result = await scrape(options);
  },

}