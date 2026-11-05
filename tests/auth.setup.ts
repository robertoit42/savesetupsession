import { test as setup, expect } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  
  await page.goto(process.env.E2E_BASE_URL!)
  await page.getByRole('textbox', {name: 'Username'}).fill(process.env.E2E_USERNAME!)
  await page.getByRole('textbox' ,{name: 'Password'}).fill(process.env.E2E_PASSWORD!)
  await page.getByRole('button' , {name: 'Login'}).click()
  // Wait until the page receives the cookies.
    //await expect(page.getByRole('heading' , {name: 'Products'})).toBeVisible()
    await expect(page.getByText('Products')).toBeVisible();
  await page.context().storageState({ path: authFile });
});