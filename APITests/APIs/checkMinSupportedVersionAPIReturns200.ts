import request from 'supertest'

export async function checkMinSupportedVersionAPIReturns200(
) {
    const response = await request('https://australia-southeast1-buggybank.cloudfunctions.net/')
        .get(`min-app-version`)
        .expect(200)

    //expect(response.body).toEqual({ some: 'response body' });
}