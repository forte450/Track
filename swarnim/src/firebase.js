import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYp3Ywo3xkPXjTECYMftRoGk0tO5oe8aM",
    authDomain: "auth-app-36be9.firebaseapp.com",
    projectId: "auth-app-36be9",
    storageBucket: "auth-app-36be9.appspot.com",
    messagingSenderId: "1003601584426",
    appId: "1:1003601584426:web:c81b446719b51b36257e53",
    databaseURL: 'https://auth-app-36be9-default-rtdb.firebaseio.com/'
  };

  export const app = initializeApp(firebaseConfig);