import { credentials } from "../tests_input/loginData";

module.exports = class CustomLogin {
    async command(user, pass, button) {
        return browser
            .setValue(user, credentials.kt.username, async () => {
                console.log('Setting username..')
            })
            .setValue(pass, credentials.kt.password, async () => {
                console.log('Setting password..')
            })
            .click(button, async () => {
                console.log('Logging in...')
            })
    }
}