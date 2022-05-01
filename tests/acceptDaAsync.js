import AsyncDtLogin from "../page_objects/asyncDtLogin";
import AsyncDtIndex from "../page_objects/asyncDtIndex";

const asyncDtLogin = new AsyncDtLogin();
const asyncDtIndex = new AsyncDtIndex();

describe('Accept newest available DA', () => {
    it('browser initialization', async () => {
        await asyncDtLogin.initPage();
    })
    it('check for bids', async () => {
        await asyncDtLogin.loginLe();
    } )
})

