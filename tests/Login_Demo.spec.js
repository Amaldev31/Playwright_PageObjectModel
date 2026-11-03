import { test, expect } from '@playwright/test';
import { Test_Login } from '../pages/Login_Class';

test('test', async ({ page }) => {

    const login = new Test_Login(page);

    await login.LoginPage();

    await login.Login('student', 'Password123');

    await login.Logout();

});


