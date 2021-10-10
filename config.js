 import * as firebase from "firebase";

//initialize your database
var firebaseConfig = {
  apiKey: "AIzaSyBohZ51B-f61MnK-RDIyn7KEkgQOCaIAWQ",
  authDomain: "attendance-c2fa9.firebaseapp.com",
  databaseURL: "https://attendance-c2fa9-default-rtdb.firebaseio.com",
  projectId: "attendance-c2fa9",
  storageBucket: "attendance-c2fa9.appspot.com",
  messagingSenderId: "953193781533",
  appId: "1:953193781533:web:e0755f1aec71dcb42a29f4"
};

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);

  }

  export default firebase.database()
 

  