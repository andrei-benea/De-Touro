import { patient } from "../tests_input/patientData";
import { service_providers } from "../tests_input/serviceProviderData";

export default class AsyncKkx3 {
    url = 'https://check-kkx3.zhp-online.de/x3/de/';
    elements = {
        usernameInput: '#ext-comp-1020',
        passwordInput: '#ext-comp-1021',
        loginButton: '#ext-gen48',
        kkSwitchButton: '#ext-gen136',
        selectGroupInput: '#ext-comp-1037',
        kkDeTouroGroup: '#ext-comp-1033 > div > div:nth-child(39)',
        loggedInUser: '#ext-comp-1181',
        treeDeTouro: '#ext-gen50 > div > li:nth-child(2) > div',
        frameMain: '[name="FDLiFrame"]',
        framePrint: '[id="ctl00_MainContent_PrintDocumentPopup_CIF-1"]',
        frameFdl: '[id="dialogContent"]',
        ktaModuleStartButton: '#ctl00_MainContent_Image1',
        ktaGridKt: '[id="ctl00_MainContent_ASPxGridViewDrives_DXMainTable"]',
        ktaGridKtNavBarButton: '[class="gridLink"]',
        ktaGridKtaType: '[id="ctl00_MainContent_ASPxGridViewDrives_tccell0_3"]',
        newKtaButton: '#ctl00_MainContent_linkButtonNewKta',
        ktaNrSearchInput: '[name="ctl00$MainContent$ASPxGridViewDrives$DXFREditorcol2"]',
        wizardKvnrInput: '[id="ctl00_MainContent_formViewInsured_textBoxKVNR"]',
        wizardKvnrSearchResult: '[class="ui-menu-item"]',
        wizardContainerFirstItem: '[id="ktaModelsContainer"] > li:nth-child(1)',
        wizardContainerConfirmButton: '[class="ui-dialog-buttonset"]>button:nth-child(1)',
        wizardPatientNextButton: '[id="ctl00_MainContent_formViewInsured_ASPxButtonNext"]',
        wizardDoctorNextButton: '[id="ctl00_MainContent_formViewDoctor_ASPxButtonNext"]',
        wizardDetailsNextButton: '[id="ctl00_MainContent_formViewDetails_ASPxButtonNext"]',
        wizardTransportSaveKtaButton: '[id="ctl00_MainContent_formViewTransport_ASPxButtonSave"]',
        wizardPrintConfirmButton: '[id="ctl00_Content_linkButtonPrintDocument"]',
        wizardSearchForFdlInput: '[id="ctl00_Content_textBoxControlSearch"]',
        wizardSearchForFdlButton: '[class="searchButton-icon"]',
        wizardSearchForFdlSingleResult: '[id="ctl00_Content_ASPxGridViewSearchDriver_cell0_1_ctl00"]',
        wizardSearchForFdlSendDaButton: '[id="ctl00_Content_linkButtonAuctionPublish"]',
        ktaDetailsKtaNumber: '[id="ctl00_labelKtaNumber"]',
        ktaDetailsKtaStatus: '[id="ctl00_MainContent_formViewKta_ASPxDockPanelStatus_textBoxStatus"]',
        ktaDetailsPublishAsKtaButton: '[id="ctl00_MainContent_formViewKta_linkButtonAuctionPublish"]',
        ktaDetailsPublishAsDaButton: '[id="ctl00_MainContent_formViewKta_linkButtonDirectInvite"]',
        ktaDetailsConfirmPublishAsKtaButton: 'body > div.ui-dialog.ui-corner-all.ui-widget.ui-widget-content.ui-front.no-close.error-dialog.confirm-kta-publish-dialog.ui-draggable.ui-dialog-buttons > div.ui-dialog-buttonpane.ui-widget-content.ui-helper-clearfix > div > button:nth-child(2)',
        ktaDetailsKtaIsPublishedWindowTitle: '#ui-id-1',
        ktaDetailsKtaIsPublishedWindowCloseButton: '[class="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front no-close error-dialog ui-draggable ui-dialog-buttons"] > div:nth-child(3) > div > button',
    };
    async initPage() {
        return browser
            .maximizeWindow()
            .url(this.url)
            .assert.urlContains(this.url)
    };
    async loginKt() {
        return browser
            .customLogin(this.elements.usernameInput, this.elements.passwordInput, this.elements.loginButton)
            .customClick(this.elements.kkSwitchButton)
            .customClick(this.elements.kkDeTouroGroup)
            .customAssertText(this.elements.loggedInUser, 'Andrei Benea')
    };
    async loadDeTouro() {
        return browser
            .pause(2000)
            .customClick(this.elements.treeDeTouro)
            .customFrameSwitch(this.elements.frameMain, 0)
    };
    async loadKtaModule() {
        return browser
            .customClick(this.elements.ktaModuleStartButton)
            .waitForElementVisible(this.elements.ktaGridKt, 'KTA grid loaded!')
    };
    async saveNewKta() {
        return browser
            .customClick(this.elements.newKtaButton)
            .customSetValue(this.elements.wizardKvnrInput, patient.kvnr)
            .customClick(this.elements.wizardKvnrSearchResult)
            .customClick(this.elements.wizardContainerFirstItem)
            .customClick(this.elements.wizardContainerConfirmButton)
            .customClick(this.elements.wizardPatientNextButton)
            .customClick(this.elements.wizardDoctorNextButton)
            .customClick(this.elements.wizardDetailsNextButton)
            .customClick(this.elements.wizardTransportSaveKtaButton)
            .customFrameSwitch(this.elements.framePrint, 0)
            .customClick(this.elements.wizardPrintConfirmButton)
            .frameParent(async () => {
                console.log('Moving up one frame!')
            })
            .logKtaNumber(this.elements.ktaDetailsKtaNumber)
    };
    async publishDa() {
        return browser
            .customClick(this.elements.ktaDetailsPublishAsDaButton)
            .customFrameSwitch(this.elements.frameFdl, 10)
            .customSetValue(this.elements.wizardSearchForFdlInput, service_providers.fdl.name)
            .customClick(this.elements.wizardSearchForFdlButton)
            .customClick(this.elements.wizardSearchForFdlSingleResult)
            .customClick(this.elements.wizardSearchForFdlSendDaButton)
            .frameParent(async () => {
                console.log('Moving up one frame!')
            })
            .customAssertText(this.elements.ktaDetailsKtaStatus, 'Laufend')
            .customClick(this.elements.ktaGridKtNavBarButton)
            .pause(5000)
    };
    async publishKta() {
        return browser
            .customClick(this.elements.ktaDetailsPublishAsKtaButton)
            .customClick(this.elements.ktaDetailsConfirmPublishAsKtaButton)
            .getText(this.elements.ktaDetailsKtaIsPublishedWindowTitle, async (result) => {
                if (result === 'KTA VERÖFFENTLICHT') {
                    console.log('Successfully published as KTA!')
                }
            })
            .customClick(this.elements.ktaDetailsKtaIsPublishedWindowCloseButton)
            .customClick(this.elements.ktaGridKtNavBarButton)
            .pause(5000)
    };
    async confirmKtaType() {
        const fs = require('fs');

        fs.readFile('tests_output/ktanumber.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
            } else {
                let testData = JSON.parse(data);
                console.log('old data: ', testData)

                browser
                    .customSetValue(this.elements.ktaNrSearchInput, testData.kta.number)
                    .pause(3000)
                    .waitForElementVisible(this.elements.ktaGridKtaType, 'KTA type can be identified....')
                    .getText(this.elements.ktaGridKtaType, async (result) => {
                        let newData = {
                            kta: {
                                number: testData.kta.number,
                                type: result.value,
                            }
                        }
                        console.log('new data: ', newData)
                        var json = JSON.stringify(newData)
                        fs.writeFile('tests_output/ktanumber.json', json, 'utf8', (err) => {
                            if (err) throw err;
                            console.log('Saving KTA type to output JSON!')
                        })
                    })
            }
        });
    };
};