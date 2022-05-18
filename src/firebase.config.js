import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBaGKfwcutmdA4dCZbnzZdJ8m2-m0vETZ8",

  authDomain: "ecommerceapp-563a1.firebaseapp.com",

  databaseURL: "https://ecommerceapp-563a1-default-rtdb.firebaseio.com",

  projectId: "ecommerceapp-563a1",

  storageBucket: "ecommerceapp-563a1.appspot.com",

  messagingSenderId: "860748085085",

  appId: "1:860748085085:web:e2b6938c89b69d39309ab4",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
