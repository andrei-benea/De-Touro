import AsyncDtLogin from "../page_objects/asyncDtLogin";
import AsyncDtIndex from "../page_objects/asyncDtIndex";

const asyncDtLogin = new AsyncDtLogin();
const asyncDtIndex = new AsyncDtIndex();

describe('Accept newest available DA', () => {
    it('browser initialization', async () => {
        await asyncDtLogin.initPage();
    })
    it('login to LE', async () => {
        await asyncDtLogin.loginLe();
    })
    it('place bid on KTA', async () => {
        await asyncDtIndex.placeBid();
    })
})

