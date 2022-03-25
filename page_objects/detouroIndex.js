module.exports = {
    url: 'https://qa.de-touro.de/Index',
    elements: {
        allKtasGrid: '#gridview-1250-table',
        ktaFirstRow: '[data-recordindex="0"]',
        ktaNrFirstRow: '#ext-gen2036',
        bidFirstRow: '#ext-gen2045',
        placeBidButton: '#button-1469',
        placeBidInputCell: '#numberfield-1477-inputEl',
        mwst19Button: '#mwst19',
        placeBidButtonInner: '#button-1490',
        confirmBidPlacementButton: '#button-1015',
        pricePerSingleRide: '.x-fieldset profile-fieldset x-box-item x-fieldset-default',
        closeKtaDetailsButton: '.x-tool-img x-tool-close'
    },
    commands: [{
        // identifyKtasInGrid() {
        //     return this
        //     elementIdElements('@allKtasGrid', 'id', 'ul li', async function (result) {
        //             console.log(result.value)
        //         })
        // },
        identifyFirstRowKta() {
            return this
                .getText('@ktaFirstRow', function (result) {
                    console.log('The KTA details are:', result.value)
                })
                // .getText('@ktaFirstRow', function (result) {
                //     console.log('Current bid is:', result.value)
                // })
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
                // .waitForElementVisible('@pricePerSingleRide', 'Bid placed..')
                // .click('@closeKtaDetailsButton')
                .waitForElementVisible('@ktaFirstRow', 'KTA grid loaded!')
                // .expect.element('@bidFirstRow').text.to.contain('123,00 €')
        }
    }]
}