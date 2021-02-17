import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyD1mzjajOp9BKjxEbm18YFpwiSvdCWFlUk",
    authDomain: "epic-coders-fa979.firebaseapp.com",
    projectId: "epic-coders-fa979",
    storageBucket: "epic-coders-fa979.appspot.com",
    messagingSenderId: "897991968298",
    appId: "1:897991968298:web:7eb8cb4db74fc5170b6553"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();