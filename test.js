const puppeteer = require('puppeteer');

let testReCaptcha = async () => {
    const browser = await puppeteer.launch({ headless: false, args: [
        '--incognito',
      ] });
    const page = await browser.newPage();
    const searchPageAi = 'https://mytaxdev.iras.gov.sg/portal/auto-inclusion/search/ais';
    const searchPageAv = 'https://mytaxdev.iras.gov.sg/portal/property/check-annual-value/search';
    const googleDemo = 'https://www.google.com/recaptcha/api2/demo?invisible=true';
    const stampDuty = 'https://mytax.iras.gov.sg/estamping/payment/pay-stampduty/search';
    const checkAvIrin2 = 'https://mytax.iras.gov.sg/esvweb/default.aspx?target=PTEVLListIntro';

    await page.goto(checkAvIrin2);
    await page.waitForNavigation(); // <------------------------- Wait for Navigation

    // await page.type('#txtUserName', 'athina_chaniago_from.acn');
    // await page.type('#txtPassword', 'iR!N3p3TAD3f4ult22');

    // await page.click('#btnLogin');
    // await page.click('#recaptcha-demo-submit');

    // await page.click('.iras-button__container');

    await page.waitForSelector('#rdBtnNewEnquiry');
    await page.click('#rdBtnNewEnquiry');
    

    // console.log('New Page URL:', page.url());


    //   await page.evaluate(() => {
    //     // Replace 'your_recaptcha_site_key' with the actual reCAPTCHA site key
    //     window.grecaptcha.execute('6Lf3ZQ4nAAAAAAYPzA9kzRSo5LNWTTsqANkd-kkK', { action: 'submit' })
    //       .then((token) => {
    //         console.log('reCAPTCHA token:', token);
    //       });
    //   });

    // await page.waitForSelector('.grecaptcha-badge');

    // await page.type('[aria-label="Input"]', '123');

    // // Click the element with the specified ARIA label
    // await page.click('[aria-label="Search Button"]');
    // await page.click('[aria-label="Search Button"]');
    // await page.click('[aria-label="Search Button"]');
    // await page.click('[aria-label="Search Button"]');
    
    // // await page.click('[aria-label="Clear Button"]');
    
    // await page.goto(searchPage);
    // await page.waitForNavigation(); 
    // await page.waitForSelector('.grecaptcha-badge');
    // await page.click('[aria-label="Search Button"]');
    // await page.click('[aria-label="Search Button"]');

    // await page.goto(searchPage);
    // await page.waitForNavigation(); 
    // await page.waitForSelector('.grecaptcha-badge');
    // await page.click('[aria-label="Search Button"]');
    // await page.click('[aria-label="Search Button"]');

    // await page.click(`[aria-label="${ariaLabel}"]`);
    // await page.click(`[aria-label="${ariaLabel}"]`);
    // await page.click(`[aria-label="${ariaLabel}"]`);
    // await page.click(`[aria-label="${ariaLabel}"]`);
    // await page.click(`[aria-label="${ariaLabel}"]`);
    // await page.click(`[aria-label="${ariaLabel}"]`);
    // await page.click(`[aria-label="${ariaLabel}"]`);
    // await page.click(`[aria-label="${ariaLabel}"]`);

};


testReCaptcha();
