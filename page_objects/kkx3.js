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
        kvnrInput: '#ctl00_MainContent_formViewInsured_textBoxKVNR',
        result: '.ui-menu-item',
        ktaTemplateOne: '#ktaModelsContainer > li:nth-child(1)',
        ktaTemplateConfirm: 'body > div.ui-dialog.ui-corner-all.ui-widget.ui-widget-content.ui-front.ui-dialog-buttons.ui-draggable.ui-resizable > div.ui-dialog-buttonpane.ui-widget-content.ui-helper-clearfix > div > button:nth-child(1)',
        stepOneWeiterButton: '#ctl00_MainContent_formViewInsured_ASPxButtonNext_CD',
        stepTwoWeiterButton: '#ctl00_MainContent_formViewDoctor_ASPxButtonNext_B',
        stepThreeWeiterButton: '#ctl00_MainContent_formViewDetails_ASPxButtonNext_CD',
        saveKtaButton: '#ctl00_MainContent_formViewTransport_ASPxButtonSave_CD',
        printFrame: '#ctl00_MainContent_PrintDocumentPopup_CIF-1',
        printDocumentsOkButton: '#ctl00_Content_linkButtonPrintDocument',
        ktaNumber: '#ctl00_labelKtaNumber',
        publishKtaButton: '#ctl00_MainContent_formViewKta_linkButtonAuctionPublish',
        confirmPublishButton: 'body > div.ui-dialog.ui-corner-all.ui-widget.ui-widget-content.ui-front.no-close.error-dialog.confirm-kta-publish-dialog.ui-draggable.ui-dialog-buttons > div.ui-dialog-buttonpane.ui-widget-content.ui-helper-clearfix > div > button:nth-child(2)',
        ktaIsPublishedConfirmationWindow: '#ui-id-1'
    },

    commands: [{
        setUser() {
            const username = 'zhp.benea'
            return this
                .setValue('@usernameInput', username);
        },
        setPass() {
            const password = 'ungam+30'
            return this
                .setValue('@passwordInput', password);
        },
        login() {
            return this
                .click('@submitButton');
        },
        selectKkFromGroup() {
            return this
                .click('@kkSwitchButton')
                .click('@kkDeTouroGroup');
        },
        loadDeTouro() {
            return this
                .click('@treeDeTouro')
        },
        loadKtaModule() {
            return this
                .click('@ktaIcon')
        },
        saveNewKta() {
            return this
                .click('@newKtaButton')
                .waitForElementVisible('@kvnrInput')
                .setValue('@kvnrInput', 'A123456778')
                .click('@result')
                .pause(300)
                .click('@ktaTemplateOne')
                .click('@ktaTemplateConfirm')
                .pause(300)
                .click('@stepOneWeiterButton')
                .waitForElementVisible('@stepTwoWeiterButton')
                .click('@stepTwoWeiterButton')
                .waitForElementVisible('@stepThreeWeiterButton')
                .click('@stepThreeWeiterButton')
                .waitForElementVisible('@saveKtaButton')
                .pause(3000)
                .click('@saveKtaButton')
                .pause(1000)
                .waitForElementVisible('@printFrame')
        },
        printDocuments() {
            return this
                .waitForElementVisible('@printDocumentsOkButton')
                .click('@printDocumentsOkButton')
                .pause(500)
        },
        getKTANumber() {
            return this
                .elementIdText('@ktaNumber', 'number', number => {
                    console.log(number.value)
                })
        },
        publishKta() {
            return this
                .waitForElementVisible('@publishKtaButton')
                .click('@publishKtaButton')
                .waitForElementVisible('@confirmPublishButton')
                .click('@confirmPublishButton')
                .waitForElementVisible('@ktaIsPublishedConfirmationWindow')
                .expect.element('@ktaIsPublishedConfirmationWindow').text.to.contain('KTA VERÖFFENTLICHT')
        },
        //Additional optional functions.. Keep for later.
        getFrameSrc() {
            return this
                .getElementProperty('@frame', 'src', src => {
                    console.log(src.value)
                }
                )
        },
        setFrameAttribute() {
            return this
                .setAttribute('@frame', 'id', '0', function (result) {
                    console.log('result', result);
                });
        }
    }]
}