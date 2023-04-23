import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBkQnSCPz2IsZcJwhPvYhGU9mffNgtVgMw",
    authDomain: "asp2fundamentosweb.firebaseapp.com",
    projectId: "asp2fundamentosweb",
    storageBucket: "asp2fundamentosweb.appspot.com",
    messagingSenderId: "189310657079",
    appId: "1:189310657079:web:41a301cd4453f2306c95b2"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;