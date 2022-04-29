import AsyncKkx from "../page_objects/asyncKkx3";

const asyncKkx3 = new AsyncKkx();

describe('Create new KTA', () => {
    it('will perform initialization', async () => {
        await asyncKkx3.maximizeWindow();
        await asyncKkx3.navigate();
        await asyncKkx3.assert.urlContains('https://check-kkx3.zhp-online.de/x3/de/')
    })
})