import { credentials } from "../tests_input/loginInfoLe";

module.exports = class CustomLogin {
    async command(user, pass, button) {
        return browser
            .setValue(user, credentials.username, async () => {
                console.log('Setting username..')
            })
            .setValue(pass, credentials.password, async () => {
                console.log('Setting password..')
            })
            .click(button, async () => {
                console.log('Logging in...')
            })
    }
}