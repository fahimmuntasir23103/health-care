import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase/firebase.config";


const firebaseInitialization = () => {
          return initializeApp(firebaseConfig);
};

export default firebaseInitialization;