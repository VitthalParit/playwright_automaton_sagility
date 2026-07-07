const{test , expect} = require('@playwright/test');

const{login} = require('../pom/login');

require('dotenv').config();



test.beforeEach('login' , async({page})=>{
    await page.goto('https://uatapps.sagilityhealth.com/btlms/login');
    const logint = new login(page);
    logint.loginsagi('sg381157');

    
})


