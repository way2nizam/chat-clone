import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyD--7wtlEVgsfGJFJpbKqLhuL6F-sQJwTQ',
  authDomain: 'whatsapp-clone-89f5e.firebaseapp.com',
  projectId: 'whatsapp-clone-89f5e',
  storageBucket: 'whatsapp-clone-89f5e.appspot.com',
  messagingSenderId: '580131305760',
  appId: '1:580131305760:web:eaa43d5694719d04f43f45',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth;
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
