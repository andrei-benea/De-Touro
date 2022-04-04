module.exports = {
    url: 'https://qa.de-touro.de/Index',
    elements: {
        allKtasGrid: '#gridview-1250-table',
        ktaFirstRow: '[data-recordindex="0"]',
        acceptBaOrDaButton: '[class="x-toolbar x-docked x-toolbar-footer x-docked-bottom x-toolbar-docked-bottom x-toolbar-footer-docked-bottom x-box-layout-ct"] > div:nth-child(1) > div:nth-child(1) > a:nth-child(4)',
        placeBidButtonKta: '[class="x-toolbar x-docked x-toolbar-footer x-docked-bottom x-toolbar-docked-bottom x-toolbar-footer-docked-bottom x-box-layout-ct"] > div:nth-child(1) > div:nth-child(1) > a:nth-child(3)',
        placeBidButtonKtaInner: '[class="x-window bid-body x-layer x-window-default x-closable x-window-closable x-window-default-closable x-border-box"] [class="x-toolbar x-docked x-toolbar-footer x-docked-bottom x-toolbar-docked-bottom x-toolbar-footer-docked-bottom x-box-layout-ct"] > div > div > a:nth-child(3)',
        confirmBidKta: '[class="x-window x-message-box x-layer x-window-default x-closable x-window-closable x-window-default-closable x-border-box"] [class="x-toolbar x-docked x-toolbar-footer x-docked-bottom x-toolbar-docked-bottom x-toolbar-footer-docked-bottom x-box-layout-ct"] > div > div > a:nth-child(3)',
        placeBidInputCellGood: '[class="x-form-field x-form-required-field x-form-text"]',        
        mwst19Button: '#mwst19',
        stornoBidButton: '[class="x-toolbar x-docked x-toolbar-footer x-docked-bottom x-toolbar-docked-bottom x-toolbar-footer-docked-bottom x-box-layout-ct"] > div:nth-child(1) > div:nth-child(1) > a:nth-child(3)',
        ktaDetailsWindow: '[class="x-window x-layer x-window-default x-closable x-window-closable x-window-default-closable x-border-box x-resizable x-window-resizable x-window-default-resizable"]'
    },
    commands: [{
        identifyFirstRowKta() {
            return this
                .waitForElementVisible('@ktaFirstRow', 'KTA grid loaded!')
                .getText('@ktaFirstRow', function (result) {
                    console.log('The KTA details are:', result.value)
                })
        },
        placeBidKta() {
            return this
                .doubleClick('@ktaFirstRow')
                .pause(2000)
                .waitForElementVisible('@placeBidButtonKta', 'Placing bid..')
                .click('@placeBidButtonKta')
                .pause(1000)
                .waitForElementVisible('@placeBidInputCellGood', 'Placing bid...')
                .setValue('@placeBidInputCellGood', '123', 'Applying price..')
                .click('@mwst19Button')
                .waitForElementVisible('@placeBidButtonKtaInner', 'Placing bid....')
                .click('@placeBidButtonKtaInner')
                .waitForElementVisible('@confirmBidKta', 'Placing bid.....')
                .click('@confirmBidKta')
                .pause(2000)
                .waitForElementVisible('@stornoBidButton', 'Bid placed!')
                .sendKeys('@ktaDetailsWindow', [browser.Keys.ESCAPE])
        },
        placeBidDa() {
            return this
                .doubleClick('@ktaFirstRow')
                .pause(2000)
                .waitForElementVisible('@acceptBaOrDaButton', 'Placing bid..')
                .click('@acceptBaOrDaButton')
                .pause(1000)
                .waitForElementVisible('@placeBidInputCellGood', 'Placing bid...')
                .setValue('@placeBidInputCellGood', '123', 'Applying price..')
                .click('@mwst19Button')
                .waitForElementVisible('@placeBidButtonKtaInner', 'Placing bid....')
                .click('@placeBidButtonKtaInner')
                .waitForElementVisible('@confirmBidKta', 'Placing bid.....')
                .click('@confirmBidKta')
                .pause(2000)
                .waitForElementVisible('@stornoBidButton', 'Bid placed!')
                .sendKeys('@ktaDetailsWindow', [browser.Keys.ESCAPE])
        },
        acceptBa() {
            return this
                .doubleClick('@ktaFirstRow')
                .pause(2000)
                .waitForElementVisible('@acceptBaOrDaButton', 'Accepting BA..')
                .click('@acceptBaOrDaButton')
                .waitForElementVisible('@stornoBidButton', 'BA accepted successfully!')
                .sendKeys('@ktaDetailsWindow', [browser.Keys.ESCAPE])
        }
    }]
}