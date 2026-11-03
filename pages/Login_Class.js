export class Test_Login {

    constructor(page) {

        this.page = page;

        this.username_textbox = page.getByRole('textbox', { name: 'Username' });
        this.password_textbox = page.getByRole('textbox', { name: 'Password' });
        this.login_button = page.getByRole('button', { name: 'Submit' });
        this.logout_button = page.getByRole('link', { name: 'Log out' });
    }

    async LoginPage() {
        await this.page.goto('https://practicetestautomation.com/practice-test-login/');
    }

    async Login(username, password) {

        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();

    }

    async Logout() {
        await this.logout_button.click();
    }

};

