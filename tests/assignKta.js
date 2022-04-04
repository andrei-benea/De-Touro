module.exports = {
    '@tags': 'assign-kta',

    'Load KTA and Send as DA'(browser) {
        const kkx3 = browser.page.kkx3();

        kkx3
            .maximizeWindow()
            .navigate()
            .setUser()
            .setPass()
            .login()
            .selectKkFromGroup()
            .waitForElementVisible('@loggedInUser', 'User is logged in!')
            .loadDeTouro()
            .waitForElementVisible('@frame', 'General iframe is visible!')
            .expect.element('@loggedInUser').text.to.contain('Andrei Benea')

        browser
            .frame(0)

        kkx3
            .loadKtaModule()
            .filterKtaToLaufende()
            .pause(3000)
            .loadFirstKtaFromGrid()
            .getKTANumber()
            .assignKta()

        browser
            .frame(2)

        kkx3
            .printDocuments()

        browser
            .frameParent()

        kkx3
            .getKtaStatusAssigned()

        browser
            .saveScreenshot('tests_output/assign-kta.png')
    }
}