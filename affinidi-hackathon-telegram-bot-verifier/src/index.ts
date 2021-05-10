import TelegramBot, { Message } from 'node-telegram-bot-api';
import { telegram_config, affinidi_config } from './utils/config';
import openingHoursReply from './utils/reply_template/openingHours';
import locationReply, { exactLocation } from './utils/reply_template/location';
import {
  askForNRIC,
  askForCredentials,
} from './utils/reply_template/retrievePolicyDocument';
import { callAssistant } from './utils/ibm_watson';
import firebase from './utils/firebase';
import {
  retrieveResponseToken,
  isNRICSame,
  retrievePolicyDocumentFromDB,
} from './utils/utils_functions';
import ApiService from './utils/affinidi_api';
import locationDefaultReply from './utils/reply_template/location';

const bot = new TelegramBot(telegram_config.bot_token, { polling: true });

bot.onText(/\/start/, (msg: Message, match: RegExpExecArray | null) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Please select from one of our services', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Retrieve Policy Document',
            callback_data: 'policydocument',
          },
          {
            text: 'Opening Hours',
            callback_data: 'openinghours',
          },
          {
            text: 'Location',
            callback_data: 'location',
          },
        ],
      ],
    },
  });
});

bot.on('message', async (msg: Message) => {
  if (msg.text === '/start') return;
  const chatId = msg.chat.id;
  let response: string = 'asd';

  try {
    if (msg.text) {
      const { intent, entity, error } = await callAssistant(msg.text);
      if (!error) {
        if (intent === 'location') {
          response = locationReply;
        } else if (entity && entity.entity === 'location' && entity.value) {
          response = exactLocation(entity.value);
        } else if (intent === 'opening_hours') {
          response = openingHoursReply;
        } else if (intent === 'retrieve_policy_document') {
          response = askForNRIC;
        } else if (entity && entity.entity === 'nric' && entity.value) {
          // Storing ChatId and NRIC inside a database, so that received VC can do a comparison
          // To set a expiry date to periodically clear sensitive information from the database to prevent leaks
          const db = firebase.firestore();
          await db
            .collection('chat-nric')
            .doc(chatId.toString())
            .set({ chatId, nric: msg.text });

          response = await askForCredentials();
        } else if (
          // Regex to check if there's a token
          msg.text.includes(
            'http://localhost:4000/api/credential/get_res_token?docID='
          )
        ) {
          const responseToken = await retrieveResponseToken(msg.text);
          const requestToken = affinidi_config.affinidi_share_cred_token;
          const verifiableVCResult = await ApiService.verifyShareResponseToken(
            requestToken,
            responseToken
          );
          console.log(verifiableVCResult)
          if (verifiableVCResult) {
            const ICFromCredential = JSON.parse(
              verifiableVCResult.data.hasIDDocument.hasIDDocument.idClass
            ).id;
            const nricSame = isNRICSame(chatId, ICFromCredential);
            response = nricSame
              ? await retrievePolicyDocumentFromDB(ICFromCredential)
              : 'NRIC does not match';
          } else {
            response = 'It is not verified';
          }
        } else {
          response = 'I do not understand, please try again';
        }
      } else {
        response = 'I do not understand, please try again';
      }
    }
  } catch (error) {
    console.log(error);
  }

  bot.sendMessage(chatId, response);
});

bot.on('callback_query', (callbackQuery) => {
  const chatId = callbackQuery.message?.chat.id;
  const action = callbackQuery.data;

  let replyMessage: string = '';

  if (action == 'policydocument') {
    replyMessage = askForNRIC;
  } else if (action == 'openinghours') {
    replyMessage = openingHoursReply;
  } else if (action == 'location') {
    replyMessage = locationDefaultReply;
  } else {
    replyMessage = 'I dont understand your query';
  }

  chatId ? bot.sendMessage(chatId, replyMessage) : null;
});

import express, { Express } from 'express';
import CredentialAPI from './routes/CredentialRoute';
import cors from 'cors';

const app: Express = express();
app.use(express.json());
app.use(cors({ origin: `http://localhost:3001`, credentials: true }));

app.use('/api/credential', CredentialAPI);

const port = process.env.PORT || 4000;
const server = app.listen(port, () =>
  console.log(`Listening to port ${port}...`)
);

export { app, server };
