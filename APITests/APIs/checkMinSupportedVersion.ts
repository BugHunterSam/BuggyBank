import request from 'supertest'

export async function checkMinSupportedVersion(
    Android?: string,
    iOS?: string,
    scheduledMessage?: string,
    outageMessage?: string,
) {
    //console.log(`check min android version ${Android} :`)

    const response = await request('https://australia-southeast1-buggybank.cloudfunctions.net/')
        .get(`min-app-version`)
        .expect(200)

    console.log(response)


}