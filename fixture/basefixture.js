const base = require('@playwright/test');
const { object } = require('../pom/object');

exports.test = base.test.extend({

    manager: async ({ page }, use) => {

        const manager = new object(page);
        await use(manager);

    }

});

exports.expect = base.expect;