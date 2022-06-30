import AsyncDtLogin from "../page_objects/asyncDtLogin";
import AsyncDtIndex from "../page_objects/asyncDtIndex";

const asyncDtLogin = new AsyncDtLogin();
const asyncDtIndex = new AsyncDtIndex();

describe('Place bid on KTA', () => {
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

