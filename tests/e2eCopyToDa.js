import AsyncKkx from "../page_objects/asyncKkx3";
import AsyncDtLogin from "../page_objects/asyncDtLogin";
import AsyncDtIndex from "../page_objects/asyncDtIndex";

const asyncKkx3 = new AsyncKkx();
const asyncDtLogin = new AsyncDtLogin();
const asyncDtIndex = new AsyncDtIndex();

describe('Copy: from KTA to DA', async () => {
    ////////////////////////////////////////////////
    ///////////////// PART 1 ///////////////////////
    ////////////////////////////////////////////////
    describe('Part 1: KT - publishing a DA from copy', async () => {
        it('browser initialization 1', async () => {
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
            await asyncKkx3.copyKta();
        })
        it('publish as DA', async () => {
            await asyncKkx3.publishDa();
        })
        it('confirm and log order type', async () => {
            await asyncKkx3.confirmKtaType();
        })
        it('stop', async () => {
            await asyncKkx3.stopStep();
        })
    })
    ////////////////////////////////////////////////
    ///////////////// PART 2 ///////////////////////
    ////////////////////////////////////////////////
    describe('Part 2: LE - accepting the DA', async () => {
        it('browser initialization 2', async () => {
            await asyncDtLogin.initPage();
        })
        it('login to LE', async () => {
            await asyncDtLogin.softLoginLe();
        })
        it('place bid on KTA', async () => {
            await asyncDtIndex.placeBid();
        })
        it('stop', async () => {
            await asyncDtIndex.stopStep();
        })
    })
    ////////////////////////////////////////////////
    ///////////////// PART 3 ///////////////////////
    ////////////////////////////////////////////////
    describe('Part 3: KT - assigning the DA', async () => {
        it('browser initialization 3', async () => {
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
        it('stop', async () => {
            await asyncKkx3.stopStep();
        })
    })
    ////////////////////////////////////////////////
    ///////////////// PART 4 ///////////////////////
    ////////////////////////////////////////////////
    describe('Part 4: LE - uploading signature proofs for the DA', async () => {
        it('browser initialization 4', async () => {
            await asyncDtLogin.initPage();
        })
        it('login to LE', async () => {
            await asyncDtLogin.softLoginLe();
        })
        it('upload proof of performance', async () => {
            await asyncDtIndex.simulateRide();
        })
        it('stop', async () => {
            await asyncDtIndex.stopStep();
        })
    })
})