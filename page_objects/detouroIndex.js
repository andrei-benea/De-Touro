module.exports = {
    url: 'https://qa.de-touro.de/Index',
    elements: {
        allKtasGrid: '#gridview-1250-body',
        ktaFirstRow: '#gridview-1250-record-3123',
        ktaNrFirstRow: '#ext-gen2036',
        bidFirstRow: '#ext-gen2045',
        placeBidButton: '#button-1469',
        placeBidInputCell: '#numberfield-1477-inputEl',
        mwst19Button: '#mwst19',
        placeBidButtonInner: '#button-1490',
        confirmBidPlacementButton: '#button-1015',
        pricePerSingleRide: '#displayfield-1624-inputEl',
        closeKtaDetailsButton: '#tool-1686-toolEl'
    },
    commands: [{
        identifyFirstRowKta() {
            return this
                .getText('@ktaNrFirstRow', function (result) {
                    console.log('The KTA Nr. is:', result.value)
                }
            )
                .getText('@bidFirstRow', function (result) {
                    console.log('Current bid is:', result.value)
                }
            )
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
                .waitForElementVisible('@pricePerSingleRide', 'Bid placed..')
                .click('@closeKtaDetailsButton')
                .waitForElementVisible('@ktaNrFirstRow', 'KTA grid loaded!')
                .expect.element('@bidFirstRow').text.to.contain('123,00 €')
        }
    }]
}