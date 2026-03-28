import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAepZAQK4Xf4dD7QCRAzRT42F2fDFMg7VI',
  authDomain: 'evgenvelichko-58c0b.firebaseapp.com',
  projectId: 'evgenvelichko-58c0b',
  storageBucket: 'evgenvelichko-58c0b.firebasestorage.app',
  messagingSenderId: '431682154350',
  appId: '1:431682154350:web:5dc70ef566ce840c6b5b7f',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
