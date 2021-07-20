import {checkMinSupportedVersionAPIReturns200} from "./APIs/checkMinSupportedVersionAPIReturns200";

describe ('Smoke test APIs', ()=> {
    test ('Check API is up and running', async() => {
        await checkMinSupportedVersionAPIReturns200()
    })
})