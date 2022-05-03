module.exports = class CustomLogin {
    async command(user, pass, button) {
        return browser
            .setValue(user, browser.globals.username, async () => {
                console.log(browser.globals.username, 'Setting username..')
            })
            .setValue(pass, browser.globals.password, async () => {
                console.log(browser.globals.password, 'Setting password..')
            })
            .click(button, async () => {
                console.log('Logging in...')
            })
    }
}