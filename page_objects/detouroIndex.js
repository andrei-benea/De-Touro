module.exports = {
    url: 'https://qa.de-touro.de/Index',
    elements: {
        allKtasGrid: 'gridview-1250-body',
    },
    commands: [{
        placeBid() {
            return this
                .waitForElementVisible('@allKtasGrid', 'All KTA grid visible!')
                // .click()
        }
    }]
}