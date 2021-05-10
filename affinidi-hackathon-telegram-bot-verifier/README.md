# Affinidi Hackathon - Telegram Bot Verifier

## Table of contents

- [Introduction](#introduction)
- [Initial Set Up](#Initial-set-up)

  - [Generate Affinidi API Key](#generate-api-key)
  - [Create a Telegram Bot](#create-a-telegram-bot)
  - [Create IBM Watson Assistant](#create-ibm-watson-assistant)
  - [Firebase Credentials](#firebase)
  - [Generate Share Credential Request Token](#generate-share-credential-request-token)
  - [Configure .env File](#configure-.env-file)

- [How to run](#how-to-run)
  - [Sequence](#sequence)

## Introduction

This is a Telegram Bot which acts as a Verifier, it request the user for their credentials and thereafter verifying it before releasing the policy document back to the user

## Initial Set Up

### Generate API Key

Before you could use our API and SDK services, you would have to register to get the API keys.

1. Go to apikey.affinidi.com
2. Register for an account
3. Store the `API Key` and `API Key Hash` safely

### Create a Telegram Bot

1. Go to Telegram and search for `@BotFather`
2. Go through the steps to create a new bot
3. Retrieve the `link to your bot` and your `bot token`

### Create IBM Watson Assistant

1. Log in to your IBM Account through https://cloud.ibm.com/login
2. Search for IBM Watson Assistant under the Service Catalog
3. Look for Assistant Settings and retrieve Assistant ID, Assistant URL and Service Credentials API Key
4. Look for your desired Skill and select on View API Details and retrieve Skill ID
5. Note that the Service URL can be attained through Assistant URL by removing everything from /v2/ onwards

### Firebase

1. Go to Firebase Console https://console.firebase.google.com/
2. Create a new Firestore
3. Navigation to Project Settings
4. Look for `firebaseConfig` and copy the credentials. It should look like

```
  var firebaseConfig = {
    apiKey: <<SOME API KEY>>,
    authDomain: "<<SOMEP PROJECT NAME>>.firebaseapp.com",
    projectId: "<<SOMEP PROJECT NAME>>",
    storageBucket: "<<SOMEP PROJECT NAME>>.appspot.com",
    messagingSenderId: <<SOME STRING>>,
    appId: <<SOME STRING>>
  };
```

### Generate Share Credential Request Token

1. Go to `https://verifier-token.vc-generator.com/` and log in with your verifier account
2. After logging in, select the `IDDocumentCredentialPersonV1` and click on `generate`
3. The 'Share Request Token' will be generated and you can copy and paste it into the `env variable in .env` variable in this repository.

### Configure .env file

1. Open terminal and navigate to the project folder
2. Run `cp .env.example .env`
3. Fill in the .env file with the details that you have gathered in the previous steps

```
TELEGRAM_BOT_URL=
TELEGRAM_BOT_TOKEN=

WATSON_ASSISTANT_ID=
WATSON_ASSISTANT_URL=
WATSON_API_KEY=
WATSON_SKILL_ID=
WATSON_SERVICE_URL=

AFFINIDI_API_KEY=
AFFINIDI_API_KEY_HASH=

AFFINIDI_SHARE_CRED_TOKEN=

FIREBASE_API_KEY=
FIREBASE_AUTHDOMAIN=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGEBUCKET=
FIREBASE_MESSAGINGSENDER_ID=
FIREBASE_APP_ID=
```

## How to run

1. Open terminal and navigate to the project folder
2. Run `npm install`
3. Run `cp .env.example .env`
4. Populate the credentials in `.env`
5. Run `npm run dev`

### Sequence

Run Issuer, Holder and Verifier in this sequence in your local machine.
