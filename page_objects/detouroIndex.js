module.exports = {
    url: 'https://qa.de-touro.de/Index',
    elements: {
        allKtasGrid: '#gridview-1250-table',
        ktaFirstRow: '[data-recordindex="0"]',
        placeBidButton: '#button-1469',
        placeBidInputCell: '#numberfield-1477-inputEl',
        mwst19Button: '#mwst19',
        placeBidButtonInner: '#button-1490',
        confirmBidPlacementButton: '#button-1015',
    },
    commands: [{
        identifyFirstRowKta() {
            return this
                .waitForElementVisible('@ktaFirstRow', 'KTA grid loaded!')
                .getText('@ktaFirstRow', function (result) {
                    // const bidAmount = document.getElementById('@ktaFirstRow').children[14].text
                    console.log('The KTA details are:', result.value)
                })
        },
        placeBid() {
            return this
                .doubleClick('@ktaFirstRow')
                .waitForElementVisible('@placeBidButton', 'Placing bid..')
                .click('@placeBidButton')
                .pause(1000)
                .waitForElementVisible('@placeBidInputCell', 'Placing bid...')
                .setValue('@placeBidInputCell', '123', 'Applying price..')
                .click('@mwst19Button')
                .waitForElementVisible('@placeBidButtonInner', 'Placing bid....')
                .click('@placeBidButtonInner')
                .waitForElementVisible('@confirmBidPlacementButton', 'Placing bid.....')
                .click('@confirmBidPlacementButton')
                .pause(2000)
                .waitForElementVisible('@ktaFirstRow', 'Bid placed!')
        }
    }]
}