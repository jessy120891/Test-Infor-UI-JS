import { test, expect } from "@playwright/test";
import dayjs from 'dayjs';

test.describe("Booking", () => {
  test.only("Validate CheckIn and ChechOut days", async ({ page }) => {
    await page.goto("https://www.booking.com/");

    const nowDate = dayjs();

    const selectorToday = nowDate.format('YYYY-MM-DD');
    const selectorTomorrow = nowDate.add(1, 'day').format('YYYY-MM-DD');
    const selectorYesterday = nowDate.add(-1, 'day').format('YYYY-MM-DD');

    await page.waitForTimeout(5000)

    const buttons = page.locator('.xp__input-group >> nth=2');
    await buttons.click();

    const todayDayBtn = await page.locator(`td[data-date="${selectorToday}"] >> span >> nth=0`);
    await todayDayBtn.click();
    expect(await todayDayBtn.getAttribute('aria-checked')).toBe('true');


    const yesterdayDayBtn = await page.locator(`td[data-date="${selectorYesterday}"] >> span >> nth=0`);
    await yesterdayDayBtn.click();
    expect((await yesterdayDayBtn.getAttribute('aria-checked'))).toBe('false');

    const tomorrowDayBtn = await page.locator(`td[data-date="${selectorTomorrow}"] >> span >> nth=0`);
    await tomorrowDayBtn.click();
    expect(await tomorrowDayBtn.getAttribute('aria-checked')).toBe('true');

  });

});
