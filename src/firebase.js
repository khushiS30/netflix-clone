import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAWVjdo8KPY-UnuGMkfRNaWDX-fWLHt5n0",
  authDomain: "netflix-clone-69795.firebaseapp.com",
  projectId: "netflix-clone-69795",
  storageBucket: "netflix-clone-69795.appspot.com",
  messagingSenderId: "544610523033",
  appId: "1:544610523033:web:9de644153259b51591a508"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()  //firebase is the db that we are gonna use it will allow us what the user subscription is
const auth = firebase.auth();


export {auth}
export default db;