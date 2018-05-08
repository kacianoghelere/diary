import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD-8m_M9RcGQXd4Swf8-fL8a3TolzvM6SY',
  authDomain: 'diary-441a5.firebaseapp.com',
  databaseURL: 'https://diary-441a5.firebaseio.com',
  projectId: 'diary-441a5',
  storageBucket: '',
  messagingSenderId: '218322295204'
};

firebase.initializeApp(config);

export const database = firebase.database().ref('/notes');