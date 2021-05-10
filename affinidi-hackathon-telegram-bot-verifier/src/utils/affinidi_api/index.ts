import { verifierApi } from './apiSetup';

export default class ApiService {
  /**
   * Method for creating a new user account.
   * Current project setup supports only arbitrary username usage, but email or phone numbers can be used as well.
   * Endpoint info: https://cloud-wallet-api.staging.affinity-project.org/api-docs/#/User/SignUp.
   * */
  static async generateShareCredReqToken() {
    const input = {
      credentialRequirements: [
        {
          type: ['IDDocumentCredentialPersonV1'],
        },
      ],
    };
    const { data } = await verifierApi.post(
      '/verifier/build-credential-request',
      input
    );
    const { header, payload } = data;
    console.log(data);
    // return data;
  }

  static async verifyShareResponseToken(
    requestToken: string,
    responseToken: string
  ) {
    try {
      const { data } = await verifierApi.post(
        '/verifier/verify-share-response',
        {
          credentialShareRequestToken: requestToken,
          credentialShareResponseToken: responseToken,
        }
      );
      return data.isValid
        ? data.suppliedCredentials[0].credentialSubject
        : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
