const{test} = require('@playwright/test');
const{login} = require('../pom/login');
require('dotenv').config({path:'C:\Users\vitthal.parit\PlaywrightFramework\data.env'});

console.log(process.env.bas);
console.log(process.env.BASE_URL);



test.beforeEach('login' , async({page})=>{
    await page.goto(process.env.bas);
    const logint = new login(page);
    await logint.loginsagi('process.env.cred');

    
})





test('dd' , async({page})=>{

    await page.locator('div:nth-child(8) a:nth-child(1)').click();
  
})