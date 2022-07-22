import AsyncDtLogin from "../../page_objects/asyncDtLogin";
import AsyncDtIndex from "../../page_objects/asyncDtIndex";

const asyncDtLogin = new AsyncDtLogin();
const asyncDtIndex = new AsyncDtIndex();

describe('Upload proof of performance', () => {
    it('browser initialization', async () => {
        await asyncDtLogin.initPage();
    })
    it('login to LE', async () => {
        await asyncDtLogin.loginLe();
    })
    it('upload proof of performance', async () => {
        await asyncDtIndex.simulateRide();
    })
})