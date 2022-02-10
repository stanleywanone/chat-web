import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB23DmdO2bhLZnxaFi8COG_FpnISTPSB9I",
  authDomain: "chat-web-604d6.firebaseapp.com",
  projectId: "chat-web-604d6",
  storageBucket: "chat-web-604d6.appspot.com",
  messagingSenderId: "951086062920",
  appId: "1:951086062920:web:30a1e5ef010e074d14e77d",
  measurementId: "G-6GC3NDRX7P",
}
let app

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

const db = app.firestore()
const auth = firebase.auth()

export { db, auth }
