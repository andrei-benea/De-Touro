import AsyncDtLogin from "../page_objects/asyncDtLogin";
import AsyncDtIndex from "../page_objects/asyncDtIndex";

const asyncDtLogin = new AsyncDtLogin();
const asyncDtIndex = new AsyncDtIndex();

describe('Creating a new company on LE', async () => {
    it('browser initialization', async () => {
        await asyncDtLogin.initPage();
    })
    it('login to LE', async () => {
        await asyncDtLogin.softLoginLe();
    })
    it('create a new company', async () => {
        await asyncDtIndex.createCompany();
    })
    it('stop', async () => {
        await asyncDtIndex.stopStep();
    })
})