require('dotenv').config();

interface IWatsonConfig {
  api_key: string;
  assistant_id: string;
  assistant_url: string;
  skill_id: string;
  service_url: string;
}

interface ITelegramConfig {
  bot_token: string;
}

interface IAffinidiConfig {
  env: string;
  affinidi_api_key: string;
  affinidi_api_key_hash: string;
  affinidi_share_cred_token: string;
  affinidi_wallet_url: string;
}

interface IFirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

export const watson_config: IWatsonConfig = {
  api_key: process.env.WATSON_API_KEY || '',
  assistant_id: process.env.WATSON_ASSISTANT_ID || '',
  assistant_url: process.env.WATSON_ASSISTANT_URL || '',
  skill_id: process.env.WATSON_SKILL_ID || '',
  service_url: process.env.WATSON_SERVICE_URL || '',
};

export const telegram_config: ITelegramConfig = {
  bot_token: process.env.TELEGRAM_BOT_TOKEN || '',
};

export const affinidi_config: IAffinidiConfig = {
  env: 'prod',
  affinidi_api_key: process.env.AFFINIDI_API_KEY || '',
  affinidi_api_key_hash: process.env.AFFINIDI_API_KEY_HASH || '',
  affinidi_share_cred_token: process.env.AFFINIDI_SHARE_CRED_TOKEN || '',
  affinidi_wallet_url: process.env.AFFINIDI_WALLET_URL || '',
};

export const firebase_config: IFirebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || '',
  authDomain: process.env.FIREBASE_AUTHDOMAIN || '',
  projectId: process.env.FIREBASE_PROJECT_ID || '',
  storageBucket: process.env.FIREBASE_STORAGEBUCKET || '',
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDER_ID || '',
  appId: process.env.FIREBASE_APP_ID || '',
};
