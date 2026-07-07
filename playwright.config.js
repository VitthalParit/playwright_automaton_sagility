// @ts-check
import { defineConfig, devices, firefox } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 *
 */
export default defineConfig({
  testDir: './tests',
  retries: 1 , 
  timeout: 30000,

  expect: {
    timeout: 3000
  },
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  


  projects:[

    {
      name: 'chrome' , 
      use:{

        browserName:'chromium' , 
        headless: false ,
        screenshot:'on' , 
        trace:'on-first-retry' ,
        video:'retain-on-failure' , 
        ignoreHTTPSErrors:true , 
        ...devices['Desktop Chrome']


      }
    } ,

    {
                name:'firefox' , 

                use:{

                  browserName:'firefox' , 
                  headless:false , 
                  screenshot: 'on' , 
                  trace:'retain-on-failure' , 
                  video:'retain-on-failure' , 
                  ignoreHTTPSErrors:true , 
                  ...devices['Desktop Firefox']
                }
    } , 

    {
         name:'webkit' , 
         use:{

          browserName:'webkit' ,
          headless:true , 
          screenshot:'only-on-failure' , 
          trace:'retain-on-failure', 
          ...devices['iPhone 11 Pro Max']
         }
            
    }
  ]
 
});

