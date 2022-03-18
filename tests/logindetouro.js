module.exports = {
    '@tags': 'login-dt',

    'Login into De-Touro QA' (browser) {
        
        const login = browser.page.detouroLogin();

        login
            .navigate()
            .setUser()
            .setPass()
            .login()
            .assert.urlContains('https://qa.de-touro.de/Index')
    }
}