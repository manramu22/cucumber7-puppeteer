const {After} = require('@cucumber/cucumber')
const appconfig = require('../config/appconfig')
const scope = require('./support/scope')

After(async function(){
if( browser && page){
    const cookies = await page.cookies();
    if(cookies && cookies.length > 0){
        await page.deleteCookie(...cookies);
    }
    await page.close();
    page = null;
    await browser.close();
    browser = null;
}
});
