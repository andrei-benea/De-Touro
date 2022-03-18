module.exports = {
    '@tags': 'login',

    'Login into De-Touro QA'(browser){
        
        const username = "andrei.benea89+989@gmail.com"
        const password = "ungam+20"

        const login = browser.page.detouroLogin();

        login
            .navigate()
            .setValue('@usernameInput', username)
            .setValue('@passwordInput', password)
            .click('@submitButton')
            .assert.urlContains('https://qa.de-touro.de/Index')
    }
}