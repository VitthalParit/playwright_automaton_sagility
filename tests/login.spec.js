 const{test} = require('@playwright/test');
 require('dotenv').config({path:'C:/Users/Dell/PlaywrightProjecttest/tests/te.env'});

 test('first' , async({browser})=>{

     const dot = await  browser.newContext();

     const page = await dot.newPage();

     await page.goto(process.env.Base_urul);

     await page.locator('#userEmail').fill('paritvitthal198@gmail.com');
     await page.locator('#userPassword').fill('Vitthal@3333');
     await page.locator('#login').click();


     
 })
