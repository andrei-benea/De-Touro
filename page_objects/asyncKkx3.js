import { credentials } from "../tests_input/loginInfoKt";

export default class AsyncKkx3 {
    url = 'https://check-kkx3.zhp-online.de/x3/de/';
    elements = {
        usernameInput: '#ext-comp-1020',
        passwordInput: '#ext-comp-1021',
        submitButton: '#ext-gen48',
        kkSwitchButton: '#ext-gen136',
        selectGroupInput: '#ext-comp-1037',
        kkDeTouroGroup: '#ext-comp-1033 > div > div:nth-child(33)',
        loggedInUser: '#ext-comp-1181',
    };
    async initPage() {
        return browser.maximizeWindow()
    };
    async loadSite() {
        return browser.url('https://check-kkx3.zhp-online.de/x3/de/')
    };
    async verifyUrl() {
        return browser.assert.urlContains('https://check-kkx3.zhp-online.de/x3/de/')
    }
    async loginKt() {
        return browser
            .setValue(this.elements.usernameInput, credentials.username, async () => {
                console.log('Setting username..')
            })
            .setValue(this.elements.passwordInput, credentials.password, async () => {
                console.log('Setting password..')
            })
            .click(this.elements.submitButton, async () => {
                console.log('Logging in...')
            })
            .waitForElementVisible(this.elements.kkSwitchButton, 'Switching to KK group..')
            .click(this.elements.kkSwitchButton)
            .waitForElementVisible(this.elements.kkDeTouroGroup, 'Selecting De-Touro group..')
            .click(this.elements.kkDeTouroGroup)
            .waitForElementVisible(this.elements.loggedInUser, 'Login successful!')
            .expect.element(this.elements.loggedInUser).text.to.contain('Andrei Benea')
    };
};