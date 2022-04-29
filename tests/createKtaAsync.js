import AsyncKkx from "../page_objects/asyncKkx3";

const asyncKkx3 = new AsyncKkx();

describe('Create new KTA', () => {
    it('will perform initialization', async () => {
        await asyncKkx3.initPage();
        await asyncKkx3.loadSite();
        await asyncKkx3.verifyLogin();
    }),
    it('will perform login', async () => {
        await asyncKkx3.loginKt();
    })
})