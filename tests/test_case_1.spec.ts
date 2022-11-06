import { test, expect } from "@playwright/test";

test.describe("Booking", () => {

  test.only("Find error when empty destination field", async ({ page }) => {
    await page.goto("https://www.booking.com/");

    await page.waitForTimeout(5000)

    const button = await page.locator('button[type="submit"] >> nth=0');
    await button.click();
    const testId = await page.locator(
      "text=Enter a destination to start searching."
    );

    expect(await testId.textContent()).toContain("Enter a destination to start searching.");
  });

  test.only("Find destination placeholder", async ({ page }) => {
    await page.goto("https://www.booking.com/");

    await page.waitForTimeout(5000)

    const input = await page.locator('[name="ss"]');
    expect(await input.getAttribute("placeholder")).toBe("Where are you going?");
  });
});
