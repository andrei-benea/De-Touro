module.exports = {
    '@tags': 'login-kkx3',

    'Login into KKx3 QA' (browser) {
        
        const login = browser.page.kkx3();
        //const frame = iframe.contentWindow.document.getElementsByTagName("H1");

        login
            .navigate()
            .setUser()
            .setPass()
            .login()
            .click('@kkSwitchButton')
            .click('@kkDeTouroGroup')
            .waitForElementVisible('@loggedInUser')
            .expect.element('@loggedInUser').text.to.contain('Andrei Benea')

        login
            .loadDeTouro()

        browser
            .saveScreenshot('tests_output/kkx3.png')
    }
}