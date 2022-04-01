module.exports = {
    '@tags': 'load-kta',

    'Load KTA in status New' (browser) {
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
            .loadFirstKtaFromGrid()
            .getKTANumber()
            .triggerFdlSearch()
            // .countFrames()
        
        browser
            .frame(10)
        
        browser
            .saveScreenshot('tests_output/test-screen.png')

        kkx3
            .searchForFdl()
        
        browser
            .saveScreenshot('tests_output/loaded-kta.png')
    }
}