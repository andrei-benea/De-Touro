module.exports = {
    '@tags': 'login-kkx3',

    'Login into KKx3 QA'(browser) {

        const login = browser.page.kkx3();

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
            .waitForElementVisible('#ext-comp-1003')
            .waitForElementVisible('[name="FDLiFrame"]')
            .pause(500)
            .frame(0)
            .saveScreenshot('tests_output/kkx3.png')

        login
            .waitForElementVisible('@deTouroKta')
            .click('@ktaIcon')
            .saveScreenshot('tests_output/kkx3-inframe.png')
    }
}