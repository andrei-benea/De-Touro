module.exports = {
    '@tags': 'create-loop',

    'Loop Creation of KTAs'(browser) {
        const kkx3 = browser.page.kkx3();

        kkx3
            .createKtaLoop()
            .createKtaLoop()
            // .copyKtaLoop()
            // .copyKtaLoop()
            // .copyKtaLoop()
            // .copyKtaLoop()
    }
}