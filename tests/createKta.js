module.exports = {
    '@tags': 'create-kta',

    'Create Kta'(browser) {

        const login = browser.page.kkx3();

        login
            .navigate()
            .setUser()
            .setPass()
            .login()
            .selectKkFromGroup()
            .waitForElementVisible('@loggedInUser')
            .loadDeTouro()
            .waitForElementVisible('@frame')
            .expect.element('@loggedInUser').text.to.contain('Andrei Benea')

        browser
            .frame(0)
            // .sendKeys()

        login
            .waitForElementVisible('@aspNetForm')
            .loadKtaModule('@ktaIcon')
            .createNewKta()

        browser
            .keyDown(browser.Key.DOWN_ARROW, browser.Key.DOWN_ARROW, browser.Key.ENTER)
            .saveScreenshot('tests_output/kkx3-inframe.png')
    }
}