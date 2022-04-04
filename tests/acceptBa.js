module.exports = {
    '@tags': 'accept-ba',

    'Place bid'(browser) {

        const login = browser.page.detouroLogin();
        const index = browser.page.detouroIndex();

        login
            .maximizeWindow()
            .navigate()
            .setUser()
            .setPass()
            .login()
            .assert.urlContains('https://qa.de-touro.de/Index')

        index
            .pause(3000)
            .identifyFirstRowKta()
            .acceptBa()
            .sendKeys('@ktaDetailsWindow', [browser.Keys.ESCAPE])

        browser
            .saveScreenshot('tests_output/kta-details.png')
    }
}