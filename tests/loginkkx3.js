module.exports = {
    '@tags': 'login-kkx3',

    'Login into KKx3 QA'(browser) {

        const login = browser.page.kkx3();

        login
            .navigate()
            .setUser()
            .setPass()
            .login()
            .switchToGroupKk()
            .selectDeTouroFromGroup()
            .waitForElementVisible('@loggedInUser')
            .loadDeTouro()
            .waitForElementVisible('@frame')
            .expect.element('@loggedInUser').text.to.contain('Andrei Benea')

        browser
            .frame(0)

        login
            .waitForElementVisible('@deTouroKta')
            .click('@ktaIcon')
            .saveScreenshot('tests_output/kkx3-inframe.png')
    }
}