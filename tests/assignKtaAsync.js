import AsyncKkx from "../page_objects/asyncKkx3";

const asyncKkx3 = new AsyncKkx();

describe('Assign KTA', () => {
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
    it('Assign KTA to FDL', async () => {
        await asyncKkx3.assignKta();
    })
})