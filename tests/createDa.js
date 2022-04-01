module.exports = {
    '@tags': 'create-da',

    'Create DA' (browser) {

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
            .saveNewKta()

        browser
            .frame(0, 0)
        
        kkx3
            .printDocuments()
        
        browser
            .frameParent()

        kkx3
            .getKTANumber()
            .triggerFdlSearch()
        
        browser
            .frame(10)
        
        kkx3
            .searchForFdl()
            .publishDa()
        
        browser
            .frameParent()
        
        kkx3
            .getDaStatus()

        browser
            .saveScreenshot('tests_output/test-screen.png')
    }
}