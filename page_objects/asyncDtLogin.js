export default class AsyncDtLogin {
    url = 'https://qa.de-touro.de/Login';
    elements = {
        usernameInput: '[placeholder="E-Mail"]',
        passwordInput: '[placeholder="Kennwort"]',
        loginButton: '[id="button-1021-btnEl"]',
    }
    async initPage() {
        return browser
            .maximizeWindow()
            .url(this.url)
            .assert.urlContains(this.url)
    };
    async loginLe() {
        return browser
            .customLogin(this.elements.usernameInput, this.elements.passwordInput, this.elements.loginButton)
    }
};