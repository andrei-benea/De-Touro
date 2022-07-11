module.exports = {
    url: 'https://qa.de-touro.de/Login?',

    elements: {
        usernameInput: '#textfield-1019-inputEl',
        passwordInput: '#textfield-1020-inputEl',
        submitButton: '#button-1021-btnEl'
    },

    commands: [{
        setUser() {
            const username = 'andrei.benea89+989@gmail.com'
            return this
                .setValue('@usernameInput', username)
        },
        setPass() {
            const password = 'ungam+20'
            return this
                .setValue('@passwordInput', password)
        },
        login() {
            return this
                .click('@submitButton')
        },
    }]
}