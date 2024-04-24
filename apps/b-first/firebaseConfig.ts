import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBfJvQEgpRlP7NDucotZyS59CmuevzFttM",
  authDomain: "bfirst-91991.firebaseapp.com",
  projectId: "bfirst-91991",
  storageBucket: "bfirst-91991.appspot.com",
  messagingSenderId: "749571756317",
  appId: "1:749571756317:web:48eee8f3cba55ea158d1f4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
