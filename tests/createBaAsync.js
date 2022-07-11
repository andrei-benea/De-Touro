import AsyncKkx from "../page_objects/asyncKkx3";

const asyncKkx3 = new AsyncKkx();

describe('Publish new BA', () => {
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
        await asyncKkx3.saveNewBa();
    })
    it('publish as BA', async () => {
        await asyncKkx3.publishBa();
    })
    it('confirm and log order type', async () => {
        await asyncKkx3.confirmKtaType();
    })
})