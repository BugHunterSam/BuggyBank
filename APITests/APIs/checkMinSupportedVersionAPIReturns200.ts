import request from 'supertest';

/**
 * Checks API is up.
 */
export async function checkMinSupportedVersionAPIReturns200(
) {
  const response = await request('https://australia-southeast1-buggybank.cloudfunctions.net/')
      .get(`min-app-version`)
      .expect(200);
  return response;
}
