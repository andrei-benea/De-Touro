module.exports = {
    '@tags': 'create-kta',

    'Create KTA'(browser) {

        const kkx3 = browser.page.kkx3();

        kkx3
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
            .publishKta()
    
        browser
            .saveScreenshot('tests_output/kkx3-inframe.png')
    }
}