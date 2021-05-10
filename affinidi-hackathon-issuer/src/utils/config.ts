import decodeEnv from 'utils/decodeEnv';
import { config } from 'dotenv'

// load environment variables from a .env file into process.env
config()

// store current environment mode into the variable
const env = decodeEnv(process.env.REACT_APP_ENVIRONMENT || process.env.NODE_ENV)

// expose specific env config variables
const envConfig = {
  env,
  accessApiKey: process.env.REACT_APP_API_KEY_HASH,
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  wallet_url: process.env.REACT_APP_WALLET_URL || 'http://localhost:3001',
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
};

export default envConfig
