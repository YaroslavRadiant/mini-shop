import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const startFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCzOZmzgYC5J8mQZ__HRpFPmIH7az4BTqw",
    authDomain: "mini-shop-fa925.firebaseapp.com",
    databaseURL:
      "https://mini-shop-fa925-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mini-shop-fa925",
    storageBucket: "mini-shop-fa925.appspot.com",
    messagingSenderId: "321214430236",
    appId: "1:321214430236:web:87cfc8e48ea0ba00f4f3d9",
  };
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
};

export default startFirebase;
