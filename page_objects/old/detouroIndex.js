module.exports = {
    url: 'https://qa.de-touro.de/Index',
    elements: {
        ukfLoginPopupDecideLaterButton: '[id="button-1021-btnEl"]',
        allKtasGrid: '#gridview-1250-table',
        ktaGridFilterMeineAuftraege: '[class="x-toolbar navigation-panel x-box-item x-toolbar-default x-table-layout-ct"] > table > tbody > tr:nth-child(2) > td:nth-child(4) [class="x-btn-button"]',
        ktaRow: '[id="gridview-1250-body"] > tr',
        ktaRowStatus: '[id="gridview-1250-body"] > tr > td:last-child',
        ktaRowUnread: '[class="x-grid-row tour-grid-unread-row x-grid-data-row"]',
        ktaRowAltUnread: '[class="x-grid-row x-grid-row-alt tour-grid-unread-row x-grid-data-row"]',
        ktaFirstRow: '[data-recordindex="0"]',
        ktaFirstRowAlt: '[id="gridview-1250-body"] > tr:first-child',
        ktaFirstRowNr: '[data-recordindex="0"] > td:nth-child(6) > div',
        ktaFirstRowStatus: '[data-recordindex="0"] > td:nth-child(18) > div',
        ktaSecondRow: '[data-recordindex="1"]',
        ktaSecondRowNr: '[data-recordindex="1"] > td:nth-child(6) > div',
        ktaSecondRowStatus: '[data-recordindex="1"] > td:nth-child(18) > div',
        ktaThirdRow: '[data-recordindex="2"]',
        ktaThirdRowNr: '[data-recordindex="2"] > td:nth-child(6) > div',
        ktaThirdRowStatus: '[data-recordindex="2"] > td:nth-child(18) > div',
        ktaAssignedNewest: '[id="gridview-1434-table"] > tbody >tr:last-child',
        ktaAssignedNewestUploadedRidesButton: '[class="x-gridview-1434-table x-grid-table x-grid-with-col-lines"] > tbody >tr:last-child [class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1537 x-unselectable  x-action-col-cell"]',
        ktaAssignedNewestUploadProofsButton: '[class="x-gridview-1434-table x-grid-table x-grid-with-col-lines"] > tbody >tr:last-child [class="x-grid-cell x-grid-td x-grid-cell-actioncolumn-1538 x-unselectable  x-action-col-cell"]',
        acceptBaOrDaButton: '[class="x-toolbar x-docked x-toolbar-footer x-docked-bottom x-toolbar-docked-bottom x-toolbar-footer-docked-bottom x-box-layout-ct"] > div:nth-child(1) > div:nth-child(1) > a:nth-child(4)',
        placeBidButtonKta: '[class="x-toolbar x-docked x-toolbar-footer x-docked-bottom x-toolbar-docked-bottom x-toolbar-footer-docked-bottom x-box-layout-ct"] > div:nth-child(1) > div:nth-child(1) > a:nth-child(3)',
        placeBidButtonKtaInner: '[class="x-window bid-body x-layer x-window-default x-closable x-window-closable x-window-default-closable x-border-box"] [class="x-toolbar x-docked x-toolbar-footer x-docked-bottom x-toolbar-docked-bottom x-toolbar-footer-docked-bottom x-box-layout-ct"] > div > div > a:nth-child(3)',
        confirmBidKta: '[class="x-window x-message-box x-layer x-window-default x-closable x-window-closable x-window-default-closable x-border-box"] [class="x-toolbar x-docked x-toolbar-footer x-docked-bottom x-toolbar-docked-bottom x-toolbar-footer-docked-bottom x-box-layout-ct"] > div > div > a:nth-child(3)',
        placeBidInputCellGood: '[class="x-form-field x-form-required-field x-form-text"]',
        mwst19Button: '#mwst19',
        stornoBidButton: '[class="x-toolbar x-docked x-toolbar-footer x-docked-bottom x-toolbar-docked-bottom x-toolbar-footer-docked-bottom x-box-layout-ct"] > div:nth-child(1) > div:nth-child(1) > a:nth-child(3)',
        ktaDetailsWindow: '[class="x-window x-layer x-window-default x-closable x-window-closable x-window-default-closable x-border-box x-resizable x-window-resizable x-window-default-resizable"]',
        uploadProofWindowTopSection: '[class="x-panel upload-form-field x-grid-with-col-lines x-grid-no-row-lines x-panel-default x-grid"]',
        uploadProofKtaNrRow: '#uploadTransportWin_header',
        uploadProofWindowBottomSection: '[class="x-field upload-form-field x-table-plain x-form-item x-form-readonly x-form-type-text x-field-default x-anchor-form-item"]',
        uploadProofWindowTourTypComboBox: '[class="x-form-field x-form-text x-form-focus x-field-form-focus x-field-default-form-focus"]',
        uploadProofBrowseFilesButton: '[class="upload-btn x-form-file-btn x-unselectable upload-btn-default-small"]',
        uploadProofFileInput: '[class="x-form-item-body  x-form-file-wrap x-form-trigger-wrap-focus"] [class="x-form-trigger-wrap"]',
        uploadProofFileInputx: '#certificateFile-inputEl',
        uploadProofFileInputy: '#certificateFile-button-fileInputEl',
        uploadProofOkButton: '[class="x-btn x-unselectable x-box-item x-toolbar-item x-btn-default-small x-noicon x-btn-noicon x-btn-default-small-noicon"]:nth-child(1)',
        uploadProofConfirmationButton: '[class="x-window x-message-box x-layer x-window-default x-closable x-window-closable x-window-default-closable x-border-box"] > div:nth-child(3) > div > div > a:nth-child(2)',
        uploadProofConfirmationButtonSelected: '[class="x-btn x-unselectable x-box-item x-toolbar-item x-btn-default-small x-noicon x-btn-noicon x-btn-default-small-noicon x-over x-btn-over x-btn-default-small-over"]',
        uploadedRidesContainer: '[class="x-window x-layer x-window-default x-closable x-window-closable x-window-default-closable x-border-box"]',
        uploadedRidesList: '[class="x-window-body x-window-body-default x-layout-fit x-closable x-window-body-closable x-window-body-default-closable x-window-body-default x-window-body-default-closable x-docked-noborder-top x-docked-noborder-right x-docked-noborder-bottom x-docked-noborder-left"]',
        uploadedRidesListFirstRowNumber: '[class="x-window x-layer x-window-default x-closable x-window-closable x-window-default-closable x-border-box"] [ class="x-grid-view x-fit-item x-grid-view-default x-unselectable"] [data-recordindex="0"] > td:first-child',
        uploadedRidesListFirstRowStatusReceived: '[class="x-window x-layer x-window-default x-closable x-window-closable x-window-default-closable x-border-box"] [ class="x-grid-view x-fit-item x-grid-view-default x-unselectable"] [data-recordindex="0"] > td:last-child > div > img:nth-child(1)',
        uploadedRidesListFirstRowStatusSent: '[class="x-window x-layer x-window-default x-closable x-window-closable x-window-default-closable x-border-box"] [ class="x-grid-view x-fit-item x-grid-view-default x-unselectable"] [data-recordindex="0"] > td:last-child > div > img:nth-child(2)',
        uploadedRidesListSecondRowNumber: '[class="x-window x-layer x-window-default x-closable x-window-closable x-window-default-closable x-border-box"] [ class="x-grid-view x-fit-item x-grid-view-default x-unselectable"] [data-recordindex="1"] > td:first-child',
        uploadedRidesListSecondRowStatusReceived: '[class="x-window x-layer x-window-default x-closable x-window-closable x-window-default-closable x-border-box"] [ class="x-grid-view x-fit-item x-grid-view-default x-unselectable"] [data-recordindex="1"] > td:last-child > div > img:nth-child(1)',
        uploadedRidesListSecondRowStatusSent: '[class="x-window x-layer x-window-default x-closable x-window-closable x-window-default-closable x-border-box"] [ class="x-grid-view x-fit-item x-grid-view-default x-unselectable"] [data-recordindex="1"] > td:last-child > div > img:nth-child(2)',
    },
    commands: [{
        closeUkfLoginPopup() {
            return this
                .waitForElementVisible('@ukfLoginPopupDecideLaterButton', 'Closing UKF Login Popup')
                .click('@ukfLoginPopupDecideLaterButton')
        },
        openUnreadKtas() {
            const index = browser.page.detouroIndex();

            index
                .getAttribute('@ktaRow', 'class', function (result) {
                    // let c = result.value
                    // if (result.value === 'x-grid-row tour-grid-unread-row x-grid-data-row') {
                    //     console.log('Unread KTA identified!', c)
                    // }
                    // else
                    console.log('Checking for unread KTAs..', result)
                })

            index
                .api.elements('@ktaRow', result => {
                    result.api.forEach(() => {
                        console.log(result);
                        // food.ingredients.forEach((ingredient) => {
                        //     console.log(ingredient);
                        // });
                    });
                    console.log('KTAs on screen:', result.value.length)
                })
        },
        smartKtas() {
            const index = browser.page.detouroIndex();

            index
                .api.elements('@ktaRowUnread', result => {
                    let u = result.value.length;

                    index
                        .api.elements('@ktaRowAltUnread', result => {
                            let ua = result.value.length
                            for (let i = 0; i < u + ua; i++) {
                                console.log('ping nr. depends on unread kta nr.')
                            }
                            console.log('Unread KTA Total:', u + ua)
                            return
                        })

                    index
                        .getAttribute('@ktaRow', 'data-recordindex', result => {
                            let nr = result.value;

                            //////////WORKING ... not needed...///////////
                            // index
                            //     .api.elements('@ktaRow', result => {
                            //         let max = result.value.length
                            //         let row = 1
                            //         for (i = nr; i < max; i++) {
                            //             index.api.elements()
                            //             console.log('This and'+row)
                            //         }
                            //         console.log('Total Nr. of KTAs on screen:', result.value.length)
                            //     })
                            /////////////////END/////////////////////////

                            console.log('Data Record Index:', nr)
                        })
                    console.log('Checking unread KTAs..')
                    return
                })

            index
                .api.elements('@ktaRow', result => {
                    console.log('KTAs on screen:', result.value.length)
                })
            ////////NOT WORKING//////////////////
            // .getText('@ktaRowStatus', result => {
            //     console.log(result.value)
            // })
            ////////////////END//////////////////
            ///////WORKING BUT NOT NEEDED ACTUALLY/////////
            // index
            //     .api.elements('@ktaRowStatus', elements => {
            //     // console.log(elements);
            //     elements.value.forEach(element => {
            //         let key = Object.prototype.valueOf(element)[0];
            //         let ElementIDvalue = element[key];
            //         console.log("key = ", key);
            //         console.log("WebElementIDvalue = ", ElementIDvalue);
            //     })
            // })
            /////////////////END///////////////////////////

            index
                .getAttribute('@ktaRow', 'class', function (result) {
                    /////TOTALLY WORKS//////
                    if (result.value === 'x-grid-row tour-grid-unread-row x-grid-data-row') {
                        console.log('1 unread KTA - function is wip')
                    }
                    else
                        return
                    //////////END///////////
                    console.log('result', result);
                })
        },
        ////////////////////////////////
        // getUnreadKta() {
        //     let i = 0;
        //     let x = new Promise(resolve => {
        //         browser.elements('css selector', '[id="gridview-1250-body"] > tr', result => {
        //             resolve(result.value.length)
        //         })
        // numElementsPromise.then(numElements => {
        //     console.log(numElements);
        // })
        //     })
        //     while (i <= x, i++) {
        //         browser
        //             .getAttribute('[id="gridview-1250-body"] > tr', 'data-record-index', function (result) {
        //                 console.log(x.value)
        //             })
        //     }
        // },
        identifyKtasNewestKtas() {
            return this
                .getText('@ktaFirstRowNr', function (result) {
                    console.log('The KTA Nr. is:', result.value)

                    const index = browser.page.detouroIndex();
                    index.getText('@ktaFirstRowStatus', function (result) {
                        console.log('Status............', result.value)
                    })
                })
                .getText('@ktaSecondRowNr', function (result) {
                    console.log('The KTA Nr. is:', result.value)

                    const index = browser.page.detouroIndex();
                    index.getText('@ktaSecondRowStatus', function (result) {
                        console.log('Status............', result.value)
                    })
                })
                .getText('@ktaThirdRowNr', function (result) {
                    console.log('The KTA Nr. is:', result.value)

                    const index = browser.page.detouroIndex();
                    index.getText('@ktaThirdRowStatus', function (result) {
                        console.log('Status............', result.value)
                    })
                })
        },
        placeBidKta() {
            return this
                .getText('@ktaFirstRowNr', function (result) {
                    console.log('The KTA Nr. is:', result.value)

                    const index = browser.page.detouroIndex();
                    index.getText('@ktaFirstRowStatus', function (result) {
                        console.log('Status............', result.value)
                    })
                })
                .doubleClick('@ktaFirstRow')
                .pause(2000)
                .waitForElementVisible('@placeBidButtonKta', 'Placing bid..')
                .click('@placeBidButtonKta')
                .pause(1000)
                .waitForElementVisible('@placeBidInputCellGood', 'Placing bid...')
                .setValue('@placeBidInputCellGood', '123')
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
                .getText('@ktaFirstRowNr', function (result) {
                    console.log('The KTA Nr. is:', result.value)

                    const index = browser.page.detouroIndex();
                    index.getText('@ktaFirstRowStatus', function (result) {
                        console.log('Status............', result.value)
                    })
                })
                .doubleClick('@ktaFirstRow')
                .pause(2000)
                .waitForElementVisible('@acceptBaOrDaButton', 'Placing bid..')
                .click('@acceptBaOrDaButton')
                .pause(1000)
                .waitForElementVisible('@placeBidInputCellGood', 'Placing bid...')
                .setValue('@placeBidInputCellGood', '123')
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
                .getText('@ktaFirstRowNr', function (result) {
                    console.log('The KTA Nr. is:', result.value)

                    const index = browser.page.detouroIndex();
                    index.getText('@ktaFirstRowStatus', function (result) {
                        console.log('Status............', result.value)
                    })
                })
                .doubleClick('@ktaFirstRow')
                .pause(2000)
                .waitForElementVisible('@acceptBaOrDaButton', 'Accepting BA..')
                .click('@acceptBaOrDaButton')
                .waitForElementVisible('@stornoBidButton', 'BA accepted successfully!')
                .sendKeys('@ktaDetailsWindow', [browser.Keys.ESCAPE])
        },
        switchToMyAssignments() {
            return this
                .click('@ktaGridFilterMeineAuftraege')
                .pause(1000)
                .waitForElementVisible('@ktaAssignedNewest', 'Identifying newest KTA..')
        },
        getNewestAssignedKtaDetails() {
            return this
                .getText('@ktaAssignedNewest', function (result) {
                    console.log('The KTA details are:', result.value)
                })
        },
        uploadPerformanceProofs() {
            return this
                .waitForElementVisible('@ktaAssignedNewestUploadProofsButton', 'Starting upload process..')
                .click('@ktaAssignedNewestUploadProofsButton')
                .waitForElementVisible('@uploadProofWindowTopSection', 'Setting ride type..')
                .click('@uploadProofWindowTopSection')
                .waitForElementVisible('@uploadProofWindowTourTypComboBox', 'Setting ride type...')
                .setValue('@uploadProofWindowTourTypComboBox', 'Hin- und Rückfahrt')
                .sendKeys('@uploadProofWindowTourTypComboBox', [browser.Keys.ENTER])
                .waitForElementVisible('@uploadProofFileInputx', 'Selecting file to upload....')
                .setValue('@uploadProofFileInputy',
                    require('path').resolve(__dirname + '/../tests_input/test-image.png'))
                .waitForElementVisible('@uploadProofOkButton', 'File added successfully!')
                .click('@uploadProofOkButton')
                .pause(1000)
                .waitForElementVisible('@uploadProofConfirmationButton', 'Confirming upload....')
                .click('@uploadProofConfirmationButton')
                .pause(2000)
        },
        checkUploadedPerformanceProofs() {
            return this
                .waitForElementVisible('@ktaAssignedNewestUploadedRidesButton', 'Checking uploaded rides..')
                .click('@ktaAssignedNewestUploadedRidesButton')
                .pause(1000)
                .waitForElementVisible('@uploadedRidesList', 'Checking uploaded rides...')
                .getText('@uploadedRidesListFirstRowNumber', function (result) {
                    console.log('Ride nr.:', result.value)
                })
                .waitForElementVisible('@uploadedRidesListFirstRowStatusReceived', 'Ride signature is received!')
                .waitForElementVisible('@uploadedRidesListFirstRowStatusSent', 'Ride ride signature is sent!')
                .getText('@uploadedRidesListSecondRowNumber', function (result) {
                    console.log('Ride nr.:', result.value)
                })
                .waitForElementVisible('@uploadedRidesListSecondRowStatusReceived', 'Ride signature is received!')
                .waitForElementVisible('@uploadedRidesListSecondRowStatusSent', 'Ride signature is sent!')
                .sendKeys('@uploadedRidesContainer', [browser.Keys.ESCAPE])
        }
        //////////////////////EXTRA SHIT///////////////////////////
        // .uploadFile('@uploadProofFileInputy', '/../tests_input/test-image.png')
        // .getAttribute('@uploadProofFileInputx', 'readonly', function (result) {
        //     console.log('result', result);
        // })
        // .setAttribute('@uploadProofFileInputx', 'readonly', 'false', function (result) {
        //     console.log('result', result);
        // })
        // .getAttribute('@uploadProofFileInputx', 'readonly', function (result) {
        //     console.log('result', result);
        // })
    }]
}

function newFunction(index) {
    index
        .doubleClick('@ktaFirstRow')
        .pause(2000);
}