import { patient } from "../tests_input/patientData";
import { service_providers } from "../tests_input/serviceProviderData";
import { credentials } from "../tests_input/credentials/testAccount";

export default class AsyncKkx3 {
    url = 'https://check-kkx3.zhp-online.de/x3/de/';
    elements = {
        usernameInput: '#ext-comp-1020',
        passwordInput: '#ext-comp-1021',
        loginButton: '#ext-gen48',
        kkSwitchButton: '#ext-gen136',
        kkDeTouroGroup: '#ext-comp-1033 > div > div:nth-child(39)',
        loggedInUser: '#ext-comp-1181',
        treeDeTouro: '#ext-gen50 > div > li:nth-child(2) > div',
        frameMain: '[name="FDLiFrame"]',
        framePrint: '[id="ctl00_MainContent_PrintDocumentPopup_CIF-1"]',
        frameFdl: '[id="dialogContent"]',
        ktaModuleStartButton: '#ctl00_MainContent_Image1',
        ktaGridKt: '[id="ctl00_MainContent_ASPxGridViewDrives_DXMainTable"]',
        ktaGridNavBar: '[id="ctl00_MainContent_MenuDisplayAuctions"]',
        ktaGridNavBarAllButton: '[id="ctl00_MainContent_MenuDisplayAuctions"] > ul > li:nth-child(2)',
        ktaGridNavBarNewButton: '[id="ctl00_MainContent_MenuDisplayAuctions"] > ul > li:nth-child(3)',
        ktaGridKtNavBarButton: '[class="gridLink"]',
        ktaGridKtTableRow: '[id="ctl00_MainContent_ASPxGridViewDrives_DXMainTable"] > tbody > tr',
        ktaGridKtFirstRow: '[id="ctl00_MainContent_ASPxGridViewDrives_DXDataRow0"]',
        ktaGridStartDateColumnHeader: '[id="ctl00_MainContent_ASPxGridViewDrives_col10"]',
        ktaGridKtaType: '[id="ctl00_MainContent_ASPxGridViewDrives_tccell0_3"]',
        ktaGridEmptyRow: '[class="dxgvEmptyDataRow_deTouroKT"]',
        ktaGridContextMenuCopyKta: '[id="ctl00_MainContent_ASPxPopupMenuRow_DXI2_T"]',
        newKtaButton: '#ctl00_MainContent_linkButtonNewKta',
        ktaNrSearchInput: '[name="ctl00$MainContent$ASPxGridViewDrives$DXFREditorcol2"]',
        wizardKvnrInput: '[id="ctl00_MainContent_formViewInsured_textBoxKVNR"]',
        wizardKvnrSearchResult: '[class="ui-menu-item"]',
        wizardContainerFirstItem: '[id="ktaModelsContainer"] > li:nth-child(1)',
        wizardContainerConfirmButton: '[class="ui-dialog-buttonset"]>button:nth-child(1)',
        wizardPatientNextButton: '[id="ctl00_MainContent_formViewInsured_ASPxButtonNext"]',
        wizardDoctorNextButton: '[id="ctl00_MainContent_formViewDoctor_ASPxButtonNext"]',
        wizardDetailsNextButton: '[id="ctl00_MainContent_formViewDetails_ASPxButtonNext"]',
        wizardTransportVmktTreeContract: '[class="fancytree-lastsib fancytree-exp-nl fancytree-ico-c"]',
        wizardTransportSaveKtaButton: '[id="ctl00_MainContent_formViewTransport_ASPxButtonSave"]',
        wizardPrintConfirmButton: '[id="ctl00_Content_linkButtonPrintDocument"]',
        wizardFdlSearchBaResultFirstRow: '#ctl00_Content_ASPxGridViewVmktDrivers_cell0_1_selectedCheckBox',
        wizardSearchForFdlSendBaButton: '[id="ctl00_Content_linkButtonAuctionPublish"]',
        wizardSearchForFdlInput: '[id="ctl00_Content_textBoxControlSearch"]',
        wizardSearchForFdlButton: '[class="searchButton-icon"]',
        wizardSearchForFdlSingleResult: '[id="ctl00_Content_ASPxGridViewSearchDriver_cell0_1_ctl00"]',
        wizardSearchForFdlSendDaButton: '[id="ctl00_Content_linkButtonAuctionPublish"]',
        ktaDetailsNavBarBidsButton: '[id="ctl00_linkBidHistory"]',
        ktaDetailsKtaNumber: '[id="ctl00_labelKtaNumber"]',
        ktaDetailsKtaStatus: '[id="ctl00_MainContent_formViewKta_ASPxDockPanelStatus_textBoxStatus"]',
        ktaDetailsPublishAsKtaButton: '[id="ctl00_MainContent_formViewKta_linkButtonAuctionPublish"]',
        ktaDetailsPublishAsDaButton: '[id="ctl00_MainContent_formViewKta_linkButtonDirectInvite"]',
        ktaDetailsPublishAsBaButton: '[id="ctl00_MainContent_formViewKta_linkButtonAuctionContractInvitePublish"]',
        ktaDetailsConfirmPublishAsKtaButton: 'body > div.ui-dialog.ui-corner-all.ui-widget.ui-widget-content.ui-front.no-close.error-dialog.confirm-kta-publish-dialog.ui-draggable.ui-dialog-buttons > div.ui-dialog-buttonpane.ui-widget-content.ui-helper-clearfix > div > button:nth-child(2)',
        ktaDetailsKtaIsPublishedWindowTitle: '#ui-id-1',
        ktaDetailsKtaIsPublishedWindowCloseButton: '[class="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front no-close error-dialog ui-draggable ui-dialog-buttons"] > div:nth-child(3) > div > button',
        ktaDetailsBidsAssignToFirstButton: '[id="ctl00_MainContent_ASPxGridViewBidList_cell0_0_ASPxButtonSelect"]',
        ktaDetailsBidsConfirmAssignmentButton: '[class="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front no-close error-dialog confirm-kta-bid-dialog ui-draggable ui-dialog-buttons"] [class="ui-dialog-buttonset"] > button:nth-child(2)',
        ktaDetailsDevelopmentKtaStatusBox: '[id="ctl00_MainContent_LabelKTAStatus"] > b',
    };
    async initPage() {
        return browser
            .maximizeWindow()
            .url(this.url)
            .assert.urlContains(this.url)
    };
    async softInitPage() {
        return browser
            .navigateTo(this.url)
            .assert.urlContains(this.url)
    };
    async loginKt() {
        return browser
            .easyLogin(this.elements.usernameInput, credentials.kt.userName, this.elements.passwordInput, credentials.kt.passWord, this.elements.loginButton)
            .specialClick(this.elements.kkSwitchButton)
            .specialClick(this.elements.kkDeTouroGroup)
            .customAssertText(this.elements.loggedInUser, credentials.kt.firstName + ' ' + credentials.kt.lastName)
    };
    async loadDeTouro() {
        return browser
            .pause(2000)
            .specialClick(this.elements.treeDeTouro)
            .customFrameSwitch(this.elements.frameMain, 0)
    };
    async loadKtaModule() {
        return browser
            .specialClick(this.elements.ktaModuleStartButton)
            .waitForElementVisible(this.elements.ktaGridKt, 'KTA grid loaded!')
    };
    async saveNewKta() {
        return browser
            .specialClick(this.elements.newKtaButton)
            .customSetValue(this.elements.wizardKvnrInput, patient.kvnr)
            .specialClick(this.elements.wizardKvnrSearchResult)
            .specialClick(this.elements.wizardContainerFirstItem)
            .specialClick(this.elements.wizardContainerConfirmButton)
            .specialClick(this.elements.wizardPatientNextButton)
            .specialClick(this.elements.wizardDoctorNextButton)
            .specialClick(this.elements.wizardDetailsNextButton)
            .specialClick(this.elements.wizardTransportSaveKtaButton)
            .customFrameSwitch(this.elements.framePrint, 0)
            .specialClick(this.elements.wizardPrintConfirmButton)
            .frameParent(async () => {
                console.log('Moving up one frame!')
            })
            .logKtaNumber(this.elements.ktaDetailsKtaNumber)
    };
    async saveNewBa() {
        return browser
            .specialClick(this.elements.newKtaButton)
            .customSetValue(this.elements.wizardKvnrInput, patient.kvnr)
            .specialClick(this.elements.wizardKvnrSearchResult)
            .specialClick(this.elements.wizardContainerFirstItem)
            .specialClick(this.elements.wizardContainerConfirmButton)
            .specialClick(this.elements.wizardPatientNextButton)
            .specialClick(this.elements.wizardDoctorNextButton)
            .specialClick(this.elements.wizardDetailsNextButton)
            .specialClick(this.elements.wizardTransportVmktTreeContract)
            .specialClick(this.elements.wizardTransportSaveKtaButton)
            .customFrameSwitch(this.elements.framePrint, 0)
            .specialClick(this.elements.wizardPrintConfirmButton)
            .frameParent(async () => {
                console.log('Moving up one frame!')
            })
            .logKtaNumber(this.elements.ktaDetailsKtaNumber)
    };
    async copyKta() {
        browser
            .specialClick(this.elements.ktaGridStartDateColumnHeader)
            .pause(2000)
            .specialClick(this.elements.ktaGridStartDateColumnHeader)
            .pause(2000)
            .rightClick(this.elements.ktaGridKtFirstRow)
            .specialClick(this.elements.ktaGridContextMenuCopyKta)
            .specialClick(this.elements.wizardPatientNextButton)
            .specialClick(this.elements.wizardDoctorNextButton)
            .specialClick(this.elements.wizardDetailsNextButton)
            .specialClick(this.elements.wizardTransportSaveKtaButton)
            .customFrameSwitch(this.elements.framePrint, 0)
            .specialClick(this.elements.wizardPrintConfirmButton)
            .frameParent(async () => {
                console.log('Moving up one frame!')
            })
            .logKtaNumber(this.elements.ktaDetailsKtaNumber)
    };
    async publishDa() {
        return browser
            .specialClick(this.elements.ktaDetailsPublishAsDaButton)
            .customFrameSwitch(this.elements.frameFdl, 10)
            .customSetValue(this.elements.wizardSearchForFdlInput, service_providers.fdl.name)
            .specialClick(this.elements.wizardSearchForFdlButton)
            .specialClick(this.elements.wizardSearchForFdlSingleResult)
            .specialClick(this.elements.wizardSearchForFdlSendDaButton)
            .frameParent(async () => {
                console.log('Moving up one frame!')
            })
            .customAssertText(this.elements.ktaDetailsKtaStatus, 'Laufend')
            .specialClick(this.elements.ktaGridKtNavBarButton)
    };
    async publishBa() {
        return browser
            .specialClick(this.elements.ktaDetailsPublishAsBaButton)
            .customFrameSwitch(this.elements.frameFdl, 10)
            .specialClick(this.elements.wizardFdlSearchBaResultFirstRow)
            .specialClick(this.elements.wizardSearchForFdlSendBaButton)
            .frameParent(async () => {
                console.log('Moving up one frame!')
            })
            .customAssertText(this.elements.ktaDetailsKtaStatus, 'Laufend')
            .specialClick(this.elements.ktaGridKtNavBarButton)
            .pause(5000)
    };
    async publishKta() {
        return browser
            .specialClick(this.elements.ktaDetailsPublishAsKtaButton)
            .specialClick(this.elements.ktaDetailsConfirmPublishAsKtaButton)
            .getText(this.elements.ktaDetailsKtaIsPublishedWindowTitle, async (result) => {
                if (result === 'KTA VERÖFFENTLICHT') {
                    console.log('Successfully published as KTA!')
                }
            })
            .specialClick(this.elements.ktaDetailsKtaIsPublishedWindowCloseButton)
            .specialClick(this.elements.ktaGridKtNavBarButton)
            .pause(5000)
    };
    async confirmKtaType() {
        const fs = require('fs');
        fs.readFile('tests_output/ktainfo.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
            } else {
                let testData = JSON.parse(data);
                console.log('old data: ', testData);
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
                        fs.writeFile('tests_output/ktainfo.json', json, 'utf8', (err) => {
                            if (err) throw err;
                            console.log('Saving KTA type to output JSON!')
                        })
                    })
            }
        });
    };
    async assignKta() {
        const fs = require('fs');
        fs.readFile('tests_output/ktainfo.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
            } else {
                let testData = JSON.parse(data);
                console.log('old data: ', testData);
                browser
                    .customSetValue(this.elements.ktaNrSearchInput, testData.kta.number)
                    .pause(3000)
                    .customRefreshKt(this.elements.ktaGridNavBarAllButton, this.elements.ktaGridEmptyRow)
                    .specialClick(this.elements.ktaGridKtFirstRow)
                    .specialClick(this.elements.ktaDetailsNavBarBidsButton)
                    .specialClick(this.elements.ktaDetailsBidsAssignToFirstButton)
                    .specialClick(this.elements.ktaDetailsBidsConfirmAssignmentButton)
                    .customFrameSwitch(this.elements.framePrint, 2)
                    .specialClick(this.elements.wizardPrintConfirmButton)
                    .frameParent(async () => {
                        console.log('Moving up one frame!')
                    })
                    .customAssertText(this.elements.ktaDetailsDevelopmentKtaStatusBox, 'Zugeteilt')
            }
        })
    };
    async stopStep() {
        return browser.end()
    };
};