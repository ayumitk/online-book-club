import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
const config = {
  apiKey: 'AIzaSyCQKNKBotoFBB8T4t3E-hNuPA_zlJMiUZ8',
  authDomain: 'online-book-club-b7c82.firebaseapp.com',
  databaseURL: 'https://online-book-club-b7c82.firebaseio.com',
  projectId: 'online-book-club-b7c82',
  storageBucket: 'online-book-club-b7c82.appspot.com',
  messagingSenderId: '1050065771207',
};
firebase.initializeApp(config);
firebase.firestore();

export default firebase;
