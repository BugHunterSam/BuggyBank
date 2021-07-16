import {checkMinSupportedVersion} from "./APIs/checkMinSupportedVersion";

describe ('Test minimum app versions', ()=> {
    const currentAndroidVersion = "1.4.0"

    test ('current android version is greater than minimum version', async() => {
        console.log('Checking android version')

        await checkMinSupportedVersion()
    })
})