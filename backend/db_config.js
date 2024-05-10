import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCk5hShcb50wgCsBCfg1CzpHf6CGHHyhXM",
  authDomain: "tms-abhidigitech.firebaseapp.com",
  projectId: "tms-abhidigitech",
  storageBucket: "tms-abhidigitech.appspot.com",
  messagingSenderId: "65666375515",
  appId: "1:65666375515:web:c04e9e4c8c799b551cc47e",
  measurementId: "G-P4XBCF32QH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);

export default auth;
