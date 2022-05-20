export default class AsyncDtIndex {
    url = 'https://qa.de-touro.de/Index';
    elements = {
        ktaGridBody: '[class="x-panel-body x-panel-body-default x-layout-fit x-panel-body-default x-docked-noborder-top x-docked-noborder-right x-docked-noborder-bottom x-docked-noborder-left"]',
        ktaGridRowReadBidField: '[class="x-grid-row x-grid-data-row"] > td:nth-child(15)',
        ktaGridRowUnread: '[class="x-grid-row tour-grid-unread-row x-grid-data-row"]',
        ktaGridRowUnreadBidField: '[class="x-grid-row tour-grid-unread-row x-grid-data-row"] > td:nth-child(15)',
        ktaGridRowAltReadBidField: '[class="x-grid-row x-grid-row-alt x-grid-data-row"] > td:nth-child(15)',
        ktaGridRowAltUnread: '[class="x-grid-row x-grid-row-alt tour-grid-unread-row x-grid-data-row"]',
        ktaGridRowAltUnreadBidField: '[class="x-grid-row x-grid-row-alt tour-grid-unread-row x-grid-data-row"] > td:nth-child(15)',
        ktaDetailsContainer: '[class="x-window x-layer x-window-default x-closable x-window-closable x-window-default-closable x-border-box x-resizable x-window-resizable x-window-default-resizable"]',
        ktaDetailsContainerTitleSection: '[class="x-window x-layer x-window-default x-closable x-window-closable x-window-default-closable x-border-box x-resizable x-window-resizable x-window-default-resizable"] [class="x-panel-body x-panel-body-default x-box-layout-ct x-panel-body-default x-docked-noborder-top x-docked-noborder-right x-docked-noborder-bottom x-docked-noborder-left"] > div > div',
        ktaDetailsDaIdentifier: '[class="x-component da-text x-box-item x-component-default"]',
        ktaDetailsBaIdentifier: '[class="x-component ba-text x-box-item x-component-default"]',
        ktaDetailsPlaceBidButtonKta: '[class="x-toolbar x-docked x-toolbar-footer x-docked-bottom x-toolbar-docked-bottom x-toolbar-footer-docked-bottom x-box-layout-ct"] > div > div > a:nth-child(3)',
        ktaDetailsPlaceBidButtonDa: '[class="x-toolbar x-docked x-toolbar-footer x-docked-bottom x-toolbar-docked-bottom x-toolbar-footer-docked-bottom x-box-layout-ct"] > div > div > a:nth-child(4)',
        ktaDetailsPlaceBidButtonBa: '[class="x-toolbar x-docked x-toolbar-footer x-docked-bottom x-toolbar-docked-bottom x-toolbar-footer-docked-bottom x-box-layout-ct"] > div > div > a:nth-child(4)',
        ktaDetailsBidInput: '[class="x-form-field x-form-required-field x-form-text"]',
        ktaDetailsMwst19Button: '[id="mwst19-btnEl"]',
        ktaDetailsInnerPlaceBidButton: '[class="x-window bid-body x-layer x-window-default x-closable x-window-closable x-window-default-closable x-border-box"] [class="x-toolbar x-docked x-toolbar-footer x-docked-bottom x-toolbar-docked-bottom x-toolbar-footer-docked-bottom x-box-layout-ct"] > div > div > a:nth-child(3)',
        ktaDetailsInnerConfirmBidButton: '[class="x-window x-message-box x-layer x-window-default x-closable x-window-closable x-window-default-closable x-border-box"] [class="x-toolbar x-docked x-toolbar-footer x-docked-bottom x-toolbar-docked-bottom x-toolbar-footer-docked-bottom x-box-layout-ct"] > div > div > a:nth-child(3)'
    }
    async checkForUnreadKtas() {
        browser
            .pause(5000)
            .saveScreenshot('tests_output/detouroLE.png')
            .elements('css selector', this.elements.ktaGridRowUnread, (object) => {
                let items = object[Object.keys(object)[0]]
                browser.elements('css selector', this.elements.ktaGridRowAltUnread, (object) => {
                    let itemsAlt = object[Object.keys(object)[0]]
                    let itemsAll = items.length + itemsAlt.length
                    if (itemsAll != 0) {
                        console.log('Unread KTAs available: ', itemsAll)
                        for (let i = 0; i < items.length; i++) {
                            browser
                                .doubleClick(items[i])
                                .waitForElementVisible(this.elements.ktaDetailsContainer)
                                .getAttribute(this.elements.ktaDetailsDaIdentifier, 'style', (result) => {
                                    console.log(result)
                                    if (result.value === 'right: auto; left: 0px; margin: 0px; width: 930px; top: 53px;') {
                                        browser
                                            .getText(this.elements.ktaDetailsDaIdentifier, (text) => {
                                                console.log(text)
                                                if (text.value === 'Direkt-Anfrage (DA)') {
                                                    browser
                                                        .customClick(this.elements.ktaDetailsPlaceBidButtonDa)
                                                        .customSetValue(this.elements.ktaDetailsBidInput, '123')
                                                        .customClick(this.elements.ktaDetailsMwst19Button)
                                                        .customClick(this.elements.ktaDetailsInnerPlaceBidButton)
                                                        .customClick(this.elements.ktaDetailsInnerConfirmBidButton)
                                                }
                                                else return
                                            })
                                    }
                                    else return
                                })
                                .sendKeys(this.elements.ktaDetailsContainer, [browser.Keys.ESCAPE])
                        }
                        for (let i = 0; i < itemsAlt.length; i++) {
                            browser
                                .doubleClick(itemsAlt[i])
                                .waitForElementVisible(this.elements.ktaDetailsContainer)
                                .getAttribute(this.elements.ktaDetailsDaIdentifier, 'style', (result) => {
                                    console.log(result)
                                    if (result.value === 'right: auto; left: 0px; margin: 0px; width: 930px; top: 53px;') {
                                        browser
                                            .getText(this.elements.ktaDetailsDaIdentifier, (text) => {
                                                console.log(text)
                                                if (text.value === 'Direkt-Anfrage (DA)') {
                                                    browser
                                                        .customClick(this.elements.ktaDetailsPlaceBidButtonDa)
                                                        .customSetValue(this.elements.ktaDetailsBidInput, '123')
                                                        .customClick(this.elements.ktaDetailsMwst19Button)
                                                        .customClick(this.elements.ktaDetailsInnerPlaceBidButton)
                                                        .customClick(this.elements.ktaDetailsInnerConfirmBidButton)
                                                }
                                                else return
                                            })
                                    }
                                    else return
                                })
                                .sendKeys(this.elements.ktaDetailsContainer, [browser.Keys.ESCAPE])
                        }
                    }
                    else {
                        console.log('No unread KTAs!')
                    }
                })
            })
    }
    // async smartKtas() {
    //     return browser
    //         .smartKtas(this.elements.ktaGridRowUnread, this.elements.ktaGridRowAltUnread)
    //         // .smartKtasAlt(this.elements.ktaGridRowAltUnread)
    //     }
};