module.exports = {
    url: 'https://qa.de-touro.de/Index',
    elements: {
        allKtasGrid: '#gridview-1250-table',
        ktaFirstRow: '[data-recordindex="0"]',
        acceptBaOrDaButton: '[class="x-toolbar x-docked x-toolbar-footer x-docked-bottom x-toolbar-docked-bottom x-toolbar-footer-docked-bottom x-box-layout-ct"] > div:nth-child(1) > div:nth-child(1) > a:nth-child(4)',
        placeBidButtonKta: '[class="x-toolbar x-docked x-toolbar-footer x-docked-bottom x-toolbar-docked-bottom x-toolbar-footer-docked-bottom x-box-layout-ct"] > div:nth-child(1) > div:nth-child(1) > a:nth-child(3)',
        placeBidInputCell: '[class="x-field x-table-plain x-form-item x-form-type-text x-box-item x-field-default x-hbox-form-item"]',
        stornoBidButton: '[class="x-toolbar x-docked x-toolbar-footer x-docked-bottom x-toolbar-docked-bottom x-toolbar-footer-docked-bottom x-box-layout-ct"] > div:nth-child(1) > div:nth-child(1) > a:nth-child(3)',
        ktaDetailsWindow: '[class="x-window x-layer x-window-default x-closable x-window-closable x-window-default-closable x-border-box x-resizable x-window-resizable x-window-default-resizable"]',
        closeKtaDetailsButton: '[class="x-tool x-box-item x-tool-default x-tool-after-title x-tool-pressed"]',
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
        },
        acceptBa() {
            return this
                .doubleClick('@ktaFirstRow')
                .pause(2000)
                .waitForElementVisible('@acceptBaOrDaButton', 'Accepting BA..')
                .click('@acceptBaOrDaButton')
                .waitForElementVisible('@stornoBidButton', 'BA accepted successfully!')
        }
    }]
}