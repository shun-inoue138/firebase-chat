import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDNohTvDtLIiOzz5te35M6JHaEzo9K1khQ',
  authDomain: 'realtime-chat-cb19e.firebaseapp.com',
  projectId: 'realtime-chat-cb19e',
  storageBucket: 'realtime-chat-cb19e.appspot.com',
  messagingSenderId: '582115161175',
  appId: '1:582115161175:web:e9c6a6c5d698755a045f12',
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref('message');
export const pushMessage = ({ name, text }) => {
  console.log(name, text);
  messageRef.push({ name, text });
};
