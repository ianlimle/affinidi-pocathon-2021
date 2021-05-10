import firebase from 'firebase/app';
import 'firebase/firestore';
import { firebase_config } from '../config';

firebase.initializeApp(firebase_config);

export default firebase;
