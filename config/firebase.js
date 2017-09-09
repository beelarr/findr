
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCXyzX8B-MFDNFVF_fbyIoeRsGYoDXl5iU",
    authDomain: "findr-3ffd0.firebaseapp.com",
    databaseURL: "https://findr-3ffd0.firebaseio.com",
    projectId: "findr-3ffd0",
    storageBucket: "findr-3ffd0.appspot.com",
    messagingSenderId: "624789744867"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


module.exports = {firebaseApp};
