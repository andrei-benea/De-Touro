module.exports = {
    url: 'https://check-kkx3.zhp-online.de/x3/de/',

    elements: {
        usernameInput: '#ext-comp-1020',
        passwordInput: '#ext-comp-1021',
        submitButton: '#ext-gen48',
        kkSwitchButton: '#ext-gen136',
        selectGroupInput: '#ext-comp-1037',
        kkDeTouroGroup: '#ext-comp-1033 > div > div:nth-child(33)',
        loggedInUser: '#ext-comp-1181',
        treeDeTouro: '#ext-gen50 > div > li:nth-child(2) > div',
        frame: '[name="FDLiFrame"]',
        aspNetForm: '#aspnetForm',
        ktaIcon: '#ctl00_MainContent_Image1',
        newKtaButton: '#ctl00_MainContent_linkButtonNewKta',
        firstRowKtaGrid: '#ctl00_MainContent_ASPxGridViewDrives_DXDataRow0',
        kvnrInput: '#ctl00_MainContent_formViewInsured_textBoxKVNR',
        result: '.ui-menu-item',
        ktaTemplateOne: '#ktaModelsContainer > li:nth-child(1)',
        ktaTemplateConfirm: 'body > div.ui-dialog.ui-corner-all.ui-widget.ui-widget-content.ui-front.ui-dialog-buttons.ui-draggable.ui-resizable > div.ui-dialog-buttonpane.ui-widget-content.ui-helper-clearfix > div > button:nth-child(1)',
        stepOneWeiterButton: '#ctl00_MainContent_formViewInsured_ASPxButtonNext_CD',
        stepTwoWeiterButton: '#ctl00_MainContent_formViewDoctor_ASPxButtonNext_B',
        stepThreeWeiterButton: '#ctl00_MainContent_formViewDetails_ASPxButtonNext_CD',
        saveKtaButton: '#ctl00_MainContent_formViewTransport_ASPxButtonSave_CD',
        printFrame: '#ctl00_MainContent_PrintDocumentPopup_CIF-1',
        fdlSearchFrame: '#dialogContent',
        printDocumentsOkButton: '#ctl00_Content_linkButtonPrintDocument',
        ktaNumber: '#ctl00_labelKtaNumber',
        publishKtaButton: '#ctl00_MainContent_formViewKta_linkButtonAuctionPublish',
        publishDaButton: '#ctl00_Content_linkButtonAuctionPublish',
        directAnfrageButton: '#ctl00_MainContent_formViewKta_linkButtonDirectInvite',
        confirmPublishButton: 'body > div.ui-dialog.ui-corner-all.ui-widget.ui-widget-content.ui-front.no-close.error-dialog.confirm-kta-publish-dialog.ui-draggable.ui-dialog-buttons > div.ui-dialog-buttonpane.ui-widget-content.ui-helper-clearfix > div > button:nth-child(2)',
        ktaIsPublishedConfirmationWindow: '#ui-id-1',
        fdlSearchFrameTitle: '#ui-id-4',
        fdlSearchDaInput: '#ctl00_Content_textBoxControlSearch',
        fdlSearchDaButton: '#ctl00_Content_ImageButtonFilter',
        fdlSearchResultFirstRow: '#ctl00_Content_ASPxGridViewSearchDriver_cell0_1_ctl00',
        ktaDetailsDaStatus: '#ctl00_MainContent_formViewKta_ASPxDockPanelStatus_textBoxStatus'
    },

    commands: [{
        setUser() {
            const username = 'zhp.benea'
            return this
                .setValue('@usernameInput', username)
        },
        setPass() {
            const password = 'ungam+30'
            return this
                .setValue('@passwordInput', password)
        },
        login() {
            return this
                .click('@submitButton')
        },
        selectKkFromGroup() {
            return this
                .click('@kkSwitchButton')
                .click('@kkDeTouroGroup')
        },
        loadDeTouro() {
            return this
                .click('@treeDeTouro')
                .pause(2000)
        },
        countFrames() {
            return this
                .elements('css selector', '#FDLiFrame', function (elements) {
                    browser.elementIdText(elementsObj.ELEMENT, function (result){
                        if (index % 3 == 0) {
                            console.log('\n' + result.value)
                        }
                    })
                })
        },
        loadKtaModule() {
            return this
                .click('@ktaIcon')
        },
        saveNewKta() {
            return this
                .click('@newKtaButton')
                .waitForElementVisible('@kvnrInput', 'Step 1 will be passed!')
                .setValue('@kvnrInput', 'A123456778')
                .click('@result')
                .pause(300)
                .click('@ktaTemplateOne')
                .click('@ktaTemplateConfirm')
                .pause(300)
                .click('@stepOneWeiterButton')
                .waitForElementVisible('@stepTwoWeiterButton', 'Step 2 will be passed!')
                .click('@stepTwoWeiterButton')
                .waitForElementVisible('@stepThreeWeiterButton', 'Step 3 will be passed!')
                .click('@stepThreeWeiterButton')
                .waitForElementVisible('@saveKtaButton', 'Kta will be saved!')
                .pause(2000)
                .click('@saveKtaButton')
                .pause(500)
                .waitForElementVisible('@printFrame', 'Print iframe visible!')
        },
        loadFirstKtaFromGrid() {
            return this
                .waitForElementVisible('@firstRowKtaGrid', 'Loading first KTA from grid!')
                .click('@firstRowKtaGrid')
        },
        printDocuments() {
            return this
                .pause(1000)
                .waitForElementVisible('@printDocumentsOkButton', 'No documents will be printed!')
                .click('@printDocumentsOkButton')
                .pause(500)
        },
        getKTANumber() {
            return this
                .getText('@ktaNumber', function (result) {
                    console.log("The KTA Nr. is:", result.value)
                })
        },
        getDaStatus() {
            return this
                .waitForElementVisible('@ktaDetailsDaStatus', 'DA sent successfully!')
                .getText('@ktaDetailsDaStatus', function (result) {
                    console.log("The DA Status is:", result.value)
                })
        },
        publishKta() {
            return this
                .waitForElementVisible('@publishKtaButton', 'Kta details loaded!')
                .click('@publishKtaButton')
                .waitForElementVisible('@confirmPublishButton', 'Confirm publish is visible!')
                .click('@confirmPublishButton')
                .waitForElementVisible('@ktaIsPublishedConfirmationWindow', 'Kta successfully published!')
                .expect.element('@ktaIsPublishedConfirmationWindow').text.to.contain('KTA VERÖFFENTLICHT')
        },
        triggerFdlSearch() {
            return this
                .waitForElementVisible('@directAnfrageButton', 'Create DA button is visible!')
                .click('@directAnfrageButton')
                .pause(5000)
                .waitForElementVisible('@fdlSearchFrame', 'FDL-Search iframe visible!')
        },
        searchForFdl() {
            return this
                .waitForElementVisible('@fdlSearchDaInput', 'FDL Input is visible!')
                .setValue('@fdlSearchDaInput', 'Asklepios QA')
                .click('@fdlSearchDaButton')
                .pause(1000)
        },
        publishDa() {
            return this
                .waitForElementVisible('@fdlSearchResultFirstRow', 'Search result is visible!')
                .click('@fdlSearchResultFirstRow')
                .waitForElementVisible('@publishDaButton', 'Sending DA....')
                .click('@publishDaButton')
        },
        //Additional optional functions.. Keep for later.
        getFrameSrc() {
            return this
                .getElementProperty('@frame', 'src', src => {
                    console.log(src.value)
                })
        },
        setFrameAttribute() {
            return this
                .setAttribute('@frame', 'id', '0', function (result) {
                    console.log('result', result);
                })
        },
        // var frame = browser.frame; 
        //     // or var frames = window.parent.frames;

        //     for (var i = 0; i < frame.length; i++) {
        //         // do something with each subframe as frames[i]
        //         // frames[i].document.body.style.background = "red";
        //         console.log(i.value)
        //     }
    }]
}