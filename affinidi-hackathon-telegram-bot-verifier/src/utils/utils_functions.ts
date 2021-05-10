import firebase from '../utils/firebase';

export const retrieveResponseToken = async (url: string): Promise<string> => {
  try {
    const result = await fetch(url);
    const resultObj = await result.json();
    return resultObj.token;
  } catch (error) {
    return '';
  }
};

export const isNRICSame = async (
  chatId: number,
  nricFromVC: string
): Promise<boolean> => {
  try {
    const db = firebase.firestore();
    const doc = await db.collection('chat-nric').doc(chatId.toString()).get();
    const data: any = doc.data();
    const nricFromDB = data.nric;
    return nricFromVC === nricFromDB ? true : false;
  } catch (error) {
    return false;
  }
};

export const retrievePolicyDocumentFromDB = async (
  nric: string
): Promise<string> => {
  try {
    const db = firebase.firestore();
    const doc = await db.collection('policy-holders').doc(nric).get();
    const data: any = doc.data();
    return data.policyDocument;
  } catch (error) {
    return 'You have no policy with us';
  }
};
