import { credentials } from "../tests_input/credentials/testAccount";

export default class AsyncDtLogin {
    url = 'https://qa.de-touro.de/Login';
    elements = {
        closeCookiesButton: '[class="cookieinfo-close"]',
        usernameInput: '[placeholder="E-Mail"]',
        passwordInput: '[placeholder="Kennwort"]',
        loginButton: '[id="button-1021-btnEl"]',
    };
    async initPage() {
        return browser
            .maximizeWindow()
            .url(this.url)
            .assert.urlContains(this.url)
            .specialClick(this.elements.closeCookiesButton)
    };
    async softInitPage() {
        return browser
            .navigateTo(this.url)
            .assert.urlContains(this.url)
            .specialClick(this.elements.closeCookiesButton)
    };
    async loginLe() {
        return browser
            .specialClick(this.elements.closeCookiesButton)
            .easyLogin(this.elements.usernameInput, credentials.le.userName, this.elements.passwordInput, credentials.le.passWord, this.elements.loginButton)
    };
    async softLoginLe() {
        return browser
            .easyLogin(this.elements.usernameInput, credentials.le.userName, this.elements.passwordInput, credentials.le.passWord, this.elements.loginButton)
    };
};