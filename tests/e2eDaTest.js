import AsyncKkx from "../page_objects/asyncKkx3";
import AsyncDtLogin from "../page_objects/asyncDtLogin";
import AsyncDtIndex from "../page_objects/asyncDtIndex";

const asyncKkx3 = new AsyncKkx();
const asyncDtLogin = new AsyncDtLogin();
const asyncDtIndex = new AsyncDtIndex();

describe('Publish new DA', () => {
    ////////////////////////////////////////////////
    ///////////////// PART 1 ///////////////////////
    ////////////////////////////////////////////////
    it('browser initialization', async () => {
        await asyncKkx3.initPage();
    })
    it('login to KT', async () => {
        await asyncKkx3.loginKt();
    })
    it('De-Touro start-up', async () => {
        await asyncKkx3.loadDeTouro();
    })
    it('KTA Module start-up', async () => {
        await asyncKkx3.loadKtaModule();
    })
    it('save a new KTA', async () => {
        await asyncKkx3.saveNewKta();
    })
    it('publish as DA', async () => {
        await asyncKkx3.publishDa();
    })
    it('confirm and log order type', async () => {
        await asyncKkx3.confirmKtaType();
    })
    ////////////////////////////////////////////////
    ///////////////// PART 2 ///////////////////////
    ////////////////////////////////////////////////
    it('switch to LE side', async () => {
        await browser.navigateTo('https://qa.de-touro.de/Login?')
        .assert.urlContains('https://qa.de-touro.de/Login?')
    })
    it('login to LE', async () => {
        await asyncDtLogin.loginLe();
    })
    it('place bid on KTA', async () => {
        await asyncDtIndex.placeBid();
    })
    ////////////////////////////////////////////////
    ///////////////// PART 3 ///////////////////////
    ////////////////////////////////////////////////
    it('switch to KT side', async () => {
        await browser
            .navigateTo('https://check-kkx3.zhp-online.de/x3/de/')
            .assert.urlContains('https://check-kkx3.zhp-online.de/x3/de/')
    })
    it('login to KT', async () => {
        await asyncKkx3.loginKt();
    })
    it('De-Touro start-up', async () => {
        await asyncKkx3.loadDeTouro();
    })
    it('KTA Module start-up', async () => {
        await asyncKkx3.loadKtaModule();
    })
    it('Assign KTA to FDL', async () => {
        await asyncKkx3.assignKta();
    })
    ////////////////////////////////////////////////
    ///////////////// PART 4 ///////////////////////
    ////////////////////////////////////////////////
    it('switch to LE side', async () => {
        await browser.navigateTo('https://qa.de-touro.de/Login?')
        .assert.urlContains('https://qa.de-touro.de/Login?')
    })
    it('login to LE', async () => {
        await asyncDtLogin.loginLe();
    })
    it('upload proof of performance', async () => {
        await asyncDtIndex.simulateRide();
    })
})