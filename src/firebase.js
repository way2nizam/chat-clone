import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAwc6_NljV59_rlEgPBnZ7w07KqPpFbl7A',
  authDomain: 'chat-clone-e1b7b.firebaseapp.com',
  projectId: 'chat-clone-e1b7b',
  storageBucket: 'chat-clone-e1b7b.appspot.com',
  messagingSenderId: '516113027438',
  appId: '1:516113027438:web:5b2fe191a817388d19317f',
});

const db = firebaseApp.firestore();
export default db;
