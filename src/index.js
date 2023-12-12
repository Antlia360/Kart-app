import React from 'react';
import ReactDOM from 'react-dom/client';
import Kartitems from './kartitems';
import App from './App';
import Kart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; 



// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjVWVRV-BdY4nfibZLmyPm1nAmlD6A4wc",
  authDomain: "kart-a8947.firebaseapp.com",
  projectId: "kart-a8947",
  storageBucket: "kart-a8947.appspot.com",
  messagingSenderId: "946463044123",
  appId: "1:946463044123:web:e57249fdadd0071ecd7ebe"
};

// // Initialize Firebase
 firebase.initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App/>

  </>

);
//ReactDOM.render(<App/>,document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

