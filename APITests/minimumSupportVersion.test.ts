import {checkMinSupportedVersionAPIReturns200}
  from './APIs/checkMinSupportedVersionAPIReturns200';
import {delay} from '../utils/test';

describe('Smoke test APIs', ()=> {
  it('Check API is up and running', async () => {
    await checkMinSupportedVersionAPIReturns200();
  });
});

describe( 'performance test APIs', () => {
  it('should handle some load', async () => {
    await sendManyRequests(10, 5);
  }, 30000);

  const sendSingleRequest = async (): Promise<void> => {
    await checkMinSupportedVersionAPIReturns200();
  };

  const sendManyRequests = async (maxInflightRequests:number,
      durationSeconds: number): Promise<void> => {
    let inFlight = 0;
    let errorCount = 0;
    let requestCount = 0;
    let responseCount = 0;
    const startEpoch = Date.now();
    const endEpoch = startEpoch + (durationSeconds * 1000);
    while (Date.now() < endEpoch) {
      while (inFlight < maxInflightRequests) {
        inFlight++;
        requestCount++;
        sendSingleRequest()
            .then(() => {
              inFlight--;
              responseCount++;
            })
            .catch((err) => {
              inFlight--;
              console.error(`Request error: ${err}`);
              errorCount++;
            });
      }
      await delay(10);
    }
    while (inFlight > 0) {
      await delay(10);
    }
    const duration = (Date.now() - startEpoch) / 1000.0;

    console.info(`Requests: ${requestCount}`);
    console.info(`Errors: ${errorCount}`);
    console.info(`Responses: ${responseCount}`);
    console.info(`Duration: ${duration}s`);
    console.info(`TPS: ${requestCount / duration}`);
  };
});
