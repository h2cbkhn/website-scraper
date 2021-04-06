const scrape = require('website-scraper');
const PuppeteerPlugin = require('website-scraper-puppeteer');

export default { 

  async scrape(req, res) {
    const url = req.query.url || 'themes'
    const options = {
      urls: [
        'http://www.ansonika.com/vanno/',
        // 'http://www.ansonika.com/vanno/index-2.html',
        // 'http://www.ansonika.com/vanno/grid-listings-filterstop.html',
        // 'http://www.ansonika.com/vanno/grid-listings-filterscol.html',
        // 'http://www.ansonika.com/vanno/row-listings-filterscol.html',
        // 'http://www.ansonika.com/vanno/reviews-page.html',
        // 'http://www.ansonika.com/vanno/write-review.html',
        // 'http://www.ansonika.com/vanno/confirm.html',
        // 'http://www.ansonika.com/vanno/user-dashboard.html',
        // 'http://www.ansonika.com/vanno/user-settings.html',
        // 'http://www.ansonika.com/vanno/pricing.html',
        // 'http://www.ansonika.com/vanno/companies-landing.html',
        // 'http://www.ansonika.com/vanno/all-categories.html',
        // 'http://www.ansonika.com/vanno/category-companies-listings-filterstop.html',
        // 'http://www.ansonika.com/vanno/blog.html',
        // 'http://www.ansonika.com/vanno/login.html',
        // 'http://www.ansonika.com/vanno/register.html',
        // 'http://www.ansonika.com/vanno/about.html',
        // 'http://www.ansonika.com/vanno/help.html',
        // 'http://www.ansonika.com/vanno/faq.html',
        // 'http://www.ansonika.com/vanno/contacts.html',
        // 'http://www.ansonika.com/vanno/icon-pack-1.html',
        // 'http://www.ansonika.com/vanno/icon-pack-2.html',
        // 'http://www.ansonika.com/vanno/icon-pack-3.html',
        // 'http://www.ansonika.com/vanno/icon-pack-4.html',
        // 'http://www.ansonika.com/vanno/404.html',

      ],
      directory: '/minhpv/website-scraper/themes/vanno/index',
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