import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBbjuPuu7OKDjzhaZbMEYm-dgghBupa7Yo",
  authDomain: "fir-tutorial-5f85c.firebaseapp.com",
  projectId: "fir-tutorial-5f85c",
  storageBucket: "fir-tutorial-5f85c.appspot.com",
  messagingSenderId: "818958341154",
  appId: "1:818958341154:web:bac68b0374bf021a75267b",
  measurementId: "G-J8J7BCDXR3"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)