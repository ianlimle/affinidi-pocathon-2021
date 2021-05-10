import ApiService from '../affinidi_api';
import { affinidi_config } from '../config';
import tinyurl from 'tinyurl-api';

export const askForNRIC: string = 'Please provide your NRIC';

export const askForCredentials = async (): Promise<string> => {
  // const result = await ApiService.generateShareCredReqToken();
  const fullUrl: string = `${affinidi_config.affinidi_wallet_url}/share-credentials?token=${affinidi_config.affinidi_share_cred_token}`;
  const shortenUrl = await tinyurl(fullUrl);

  return `Please provide your credential through ${shortenUrl}`;
};
