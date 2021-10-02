import firebase from 'firebase';
require('@firebase/firestore')
const firebaseConfig = {
  apiKey: "AIzaSyCnvTYyABAOH_3uCj7KZmMKQx7Nk-cqOPc",
  authDomain: "astronomy-app-5d53f.firebaseapp.com",
  projectId: "astronomy-app-5d53f",
  storageBucket: "astronomy-app-5d53f.appspot.com",
  messagingSenderId: "203747093135",
  appId: "1:203747093135:web:5992fac7ac94d9386a5efa"
};

if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore()