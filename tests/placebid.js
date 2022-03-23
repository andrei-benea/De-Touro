module.exports = {
    '@tags': 'place-bid',

    'Place bid'(browser) {

        const login = browser.page.detouroLogin();
        const index = browser.page.detouroIndex();

        login
            .navigate()
            .setUser()
            .setPass()
            .login()
            .assert.urlContains('https://qa.de-touro.de/Index')

        browser
            .saveScreenshot('tests_output/detouro.png')

        index
            .placeBid()
    }
}