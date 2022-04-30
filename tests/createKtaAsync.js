import AsyncKkx from "../page_objects/asyncKkx3";

const asyncKkx3 = new AsyncKkx();

describe('Create new KTA', () => {
    it('browser initialization', async () => {
        await asyncKkx3.initPage();
        await asyncKkx3.loadSite();
        await asyncKkx3.verifyUrl();
    }),
    it('login to KT', async () => {
        await asyncKkx3.loginKt();
    })
    it('De-Touro start-up', async () => {
        await asyncKkx3.loadDeTouroModule();
        await browser.frame(0);
    })
    it('KTA Module start-up', async () => {
        await asyncKkx3.loadKtaModule();
    })
})