import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB4D1J3JGcuVBptee-NweKhazMiziUnkqI',
  authDomain: 'magic-woods-ed99c.firebaseapp.com',
  projectId: 'magic-woods-ed99c',
  storageBucket: 'magic-woods-ed99c.appspot.com',
  messagingSenderId: '347385709690',
  appId: '1:347385709690:web:112f030bd67dbe2f4d27c3',
  measurementId: 'G-J5FVBPQJW6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const productsRef = collection(db, 'products');
export const categoriesRef = collection(db, 'categories');

