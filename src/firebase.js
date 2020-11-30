import firebase from 'firebase';


const firebaseApp =  firebase.initializeApp({
    apiKey: "AIzaSyAUpt_4gXnRxY_x_AoysdR-owxAVx6taTU",
    authDomain: "macro-truck-241201.firebaseapp.com",
    databaseURL: "https://macro-truck-241201.firebaseio.com",
    projectId: "macro-truck-241201",
    storageBucket: "macro-truck-241201.appspot.com",
    messagingSenderId: "379764447029",
    appId: "1:379764447029:web:0909c28c09293ddc65de7c",
    measurementId: "G-1E26MLCS59"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };


