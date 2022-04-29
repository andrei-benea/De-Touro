module.exports = {
    '@tags': 'process-kta',

    'Check First Three KTAs from Grid'(browser) {
        const login = browser.page.detouroLogin();
        const index = browser.page.detouroIndex();

        login
            .maximizeWindow()
            .navigate()
            .setUser()
            .setPass()
            .login()
            .assert.urlContains('https://qa.de-touro.de/Index')

        index
            .pause(3000)
            .closeUkfLoginPopup()
            .switchToMyAssignments()
            .getNewestAssignedKtaDetails()
            .uploadPerformanceProofs()
            .checkUploadedPerformanceProofs()

        browser
            .saveScreenshot('tests_output/upload-proof.png')
    }
}