import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBOa2TLcQXoLmqguQxZ67bsvQPy5Hg3JI4",
  authDomain: "spaceflightnewsapi-80573.firebaseapp.com",
  databaseURL: "https://spaceflightnewsapi-80573.firebaseio.com",
  projectId: "spaceflightnewsapi-80573",
  storageBucket: "spaceflightnewsapi-80573.appspot.com",
  messagingSenderId: "690455514511",
  appId: "1:690455514511:web:958c70209036bae87a0ffa"
};
firebase.initializeApp(config);


export default firebase;