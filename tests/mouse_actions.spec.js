import { test, expect } from '@playwright/test';

test('Playwright Mouse Actions Demo', async ({ page }) => {

  // Open application
  await page.goto('https://demoqa.com/buttons');

  // -----------------------------
  // 1. Single Click
  // -----------------------------
  await page.locator('text=Click Me').click();

  // -----------------------------
  // 2. Double Click
  // -----------------------------
  await page.locator('#doubleClickBtn').dblclick();

  // -----------------------------
  // 3. Right Click
  // -----------------------------
  await page.locator('#rightClickBtn').click({
    button: 'right'
  });

  // -----------------------------
  // 4. Hover
  // -----------------------------
  await page.goto('https://demoqa.com/menu');

  await page.locator('text=Main Item 2').hover();

  // -----------------------------
  // 5. Drag and Drop
  // -----------------------------
  await page.goto('https://demoqa.com/droppable');

  const source = page.locator('#draggable');
  const target = page.locator('#droppable');

  await source.dragTo(target);

  await expect(target).toContainText('Dropped!');

  // -----------------------------
  // 6. Mouse Move
  // -----------------------------
  await page.mouse.move(300, 300);

  // -----------------------------
  // 7. Mouse Down
  // -----------------------------
  await page.mouse.down();

  // -----------------------------
  // 8. Mouse Up
  // -----------------------------
  await page.mouse.up();

  // -----------------------------
  // 9. Mouse Click at Coordinates
  // -----------------------------
  await page.mouse.click(250, 250);

  // -----------------------------
  // 10. Scroll Down
  // -----------------------------
  await page.mouse.wheel(0, 1000);

  // Scroll Up
  await page.mouse.wheel(0, -1000);

  // -----------------------------
  // 11. Draw Using Mouse
  // -----------------------------
  await page.goto('https://www.w3schools.com/html/html5_canvas.asp');

  await page.mouse.move(150, 250);
  await page.mouse.down();

  await page.mouse.move(250, 250);
  await page.mouse.move(250, 350);
  await page.mouse.move(150, 350);

  await page.mouse.up();

});