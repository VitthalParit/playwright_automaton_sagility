const { test, expect } = require('@playwright/test');

test('Validate all broken links', async ({ page, request }) => {
  await page.goto('https://example.com');

  const links = await page.locator('a').evaluateAll(elements =>
    elements
      .map(el => el.href)
      .filter(href => href && href.startsWith('http'))
  );

  for (const link of links) {
    const response = await request.get(link);
    console.log(`${link} --> ${response.status()}`);
    expect(response.status(), `${link} is broken`).toBeLessThan(400);
  }
});

