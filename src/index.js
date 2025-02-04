import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage, ref } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBLNzE1bYX4JK3ZOrGbWxAAx3_3yyyTbA4",
  authDomain: "triangleasphalt-4b0f2.firebaseapp.com",
  databaseURL: "https://triangleasphalt-4b0f2-default-rtdb.firebaseio.com",
  projectId: "triangleasphalt-4b0f2",
  storageBucket: "triangleasphalt-4b0f2.firebasestorage.app",
  messagingSenderId: "1089874791795",
  appId: "1:1089874791795:web:eac6c8a8018cafb3ef4906",
  measurementId: "G-GK6G4PCYXH",
  databaseURL: "https://triangleasphalt-4b0f2-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app)
const analytics = getAnalytics(app);
const database = getDatabase(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App storage={storage} />
);

