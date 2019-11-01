import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore';

import {FirebaseConfig} from './firebase-keys';

firebase.initializeApp(FirebaseConfig);

export const db = firebase.firestore();

export const usersCollectionRef = db.collection('users');
export const mailsCollectionRef = db.collection('mails');

export const inboxQuery = mailsCollectionRef.where('types.inbox', '==', true);
export const spamQuery = mailsCollectionRef.where('types.spam', '==', true);
export const trashQuery = mailsCollectionRef.where('types.trash', '==', true);

export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
