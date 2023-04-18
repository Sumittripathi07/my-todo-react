import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4_USqxrNKKOdHA6GU1AoANn5G7s4FLoE",
  authDomain: "my-todo-a49ac.firebaseapp.com",
  projectId: "my-todo-a49ac",
  storageBucket: "my-todo-a49ac.appspot.com",
  messagingSenderId: "668835661921",
  appId: "1:668835661921:web:86381517d9367fe9704220",
  measurementId: "G-WDQZ394RYF",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
