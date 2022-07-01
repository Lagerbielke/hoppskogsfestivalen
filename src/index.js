import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4ve1JTq31-u-Vb-Rbw5z2ED9Zno9azSg",
  authDomain: "hoppskogsfestivalen.firebaseapp.com",
  projectId: "hoppskogsfestivalen",
  storageBucket: "hoppskogsfestivalen.appspot.com",
  messagingSenderId: "860824501549",
  appId: "1:860824501549:web:d5b6ad9e23a44cad35e7a4",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
