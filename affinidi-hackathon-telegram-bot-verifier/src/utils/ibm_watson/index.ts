import AssistantV2 from 'ibm-watson/assistant/v2';
import { IamAuthenticator } from 'ibm-watson/auth';
import { watson_config } from '../config';

interface IResponse {
  intent?: any;
  entity?: any;
  error?: string | null;
}

const assistant = new AssistantV2({
  version: '2020-09-24',
  authenticator: new IamAuthenticator({ apikey: watson_config.api_key }),
  serviceUrl: watson_config.service_url,
  disableSslVerification: true,
});

let text: string = ''; // response text from watson assistant

const getMessage = async (
  req: string,
  sessionId: string
): Promise<IResponse> => {
  try {
    const res = await assistant.message({
      input: { message_type: 'text', text: req },
      assistantId: watson_config.assistant_id,
      sessionId,
    });
    if (!res || !res.result || !res.result.output || !res.result.output.generic)
      return { intent: null, entity: null, error: 'Error in getMessage' };

    //console.log(res.result.output);
    const intent: any =
      res.result.output.intents && res.result.output.intents.length !== 0
        ? res.result.output.intents[0].intent
        : null;

    const entity: any =
      res.result.output.entities && res.result.output.entities.length !== 0
        ? {
            entity: res.result.output.entities[0].entity,
            value: res.result.output.entities[0].value,
          }
        : null;

    return { intent, entity, error: null };
  } catch (error) {
    console.log(error);
    return { intent: null, entity: null, error: 'Error in getMessage' };
  }
};

export const callAssistant = async (req: string): Promise<IResponse> => {
  try {
    const sessionId = (
      await assistant.createSession({ assistantId: watson_config.assistant_id })
    ).result.session_id;
    const response: IResponse = await getMessage(req, sessionId);
    return response;
  } catch (error) {
    console.log(error);
    return { intent: null, entity: null, error: 'Error in callAssistant' };
  }
};
