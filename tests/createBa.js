module.exports = {
    '@tags': 'create',

    'Create BA'(browser) {

        const kkx3 = browser.page.kkx3();

        kkx3
            .maximizeWindow()
            .navigate()
            .setUser()
            .setPass()
            .login()
            .selectKkFromGroup()
            .loadDeTouro()
            .waitForElementVisible('@frame', 'General iframe is visible!')
            .expect.element('@loggedInUser').text.to.contain('Andrei Benea')

        browser
            .frame(0)

        kkx3
            .loadKtaModule()
            .saveNewBa()

        browser
            .frame(0, 0)

        kkx3
            .printDocuments()

        browser
            .frameParent()

        kkx3
            .getKTANumber()
            .triggerFdlSearchBa()

        browser
            .frame(10)

        kkx3
            .publishBa()

        browser
            .frameParent()

        kkx3
            .getKtaStatus()

        browser
            .saveScreenshot('tests_output/kkx3-inframe.png')
    }
}