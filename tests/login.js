module.exports = {
    '@tags': 'login',

    'Login into De-Touro QA'(browser){
        
        const userName = "andrei.benea89+989@gmail.com"
        const password = "ungam+20"

        const login = browser.page.detouroLogin();

        login
            .navigate()
            .setValue()
            .setValue()
            .click()
    }
}