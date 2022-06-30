// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDwOiWV1goar6QKSTpJL7N1FVTSdUbvZO0',
  authDomain: 'sixem-study.firebaseapp.com',
  projectId: 'sixem-study',
  storageBucket: 'sixem-study.appspot.com',
  messagingSenderId: '298214619317',
  appId: '1:298214619317:web:e717ca53fe35c737caa6fc',
  measurementId: 'G-447KX47BJ7'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db, analytics }
