// @ts-check
import { defineConfig, devices } from '@playwright/test';
require('dotenv').config({path:'C:/Users/Dell/PlaywrightProjecttest/tests/te.env'});

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  retries:1 , 

  timeout:30000 , 
  expect:{
    timeout: 30000, 
  } ,

  reporter: 'html' , 
   projects: [{
            name:'chrome' ,
    use:{
       browserName:'chromium' , 
       headless:false , 
       screenshot: 'on-first-failure' , 
        trace: 'retain-on-failure' , 
        video:'retain-on-failure' , 
        ignoreHTTPSErrors:true , 
        ...devices['iPhone 11 Pro Max'] 
    }

   }]

  
});

