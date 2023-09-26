// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDKxklICWrALSuYwzIgUcpZJKhBI5APowE',
  authDomain: 'tqcong-amisreview.firebaseapp.com',
  projectId: 'tqcong-amisreview',
  storageBucket: 'tqcong-amisreview.appspot.com',
  messagingSenderId: '79636816992',
  appId: '1:79636816992:web:d2e07af5104c736dab8f05',
  measurementId: 'G-13CGRH1YP8'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
