
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyAcSJBGvZzwtzBbaNThDSfKuHltQJhG-yg",
  authDomain: "clonetiktok-projeto2023.firebaseapp.com",
  projectId: "clonetiktok-projeto2023",
  storageBucket: "clonetiktok-projeto2023.appspot.com",
  messagingSenderId: "524605688624",
  appId: "1:524605688624:web:31975a151d3c89c87356f5"

};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db; 

