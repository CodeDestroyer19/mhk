// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-IwfCQLG5FtEQSIoBL48hQqO3f5eisLk",
  authDomain: "mhk-erc20.firebaseapp.com",
  projectId: "mhk-erc20",
  storageBucket: "mhk-erc20.appspot.com",
  messagingSenderId: "28372320670",
  appId: "1:28372320670:web:6f88b674fe748d6685568f",
  measurementId: "G-WRDD1RJJNH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
