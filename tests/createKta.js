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

        login
            .waitForElementVisible('@aspNetForm')
            .loadKtaModule('@ktaIcon')
            .saveNewKta()

        browser
            .frame(0, 0)
        
        login
            .printDocuments()

        browser
            .frameParent()

        login
            .getKTANumber()
            // .publishKta()
    
        browser
            .saveScreenshot('tests_output/kkx3-inframe.png')
    }
}