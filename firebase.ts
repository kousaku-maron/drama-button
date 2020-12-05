import firebase from 'firebase/app'
// import 'firebase/auth'
import 'firebase/firestore'
// import 'firebase/storage'

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyDkx0CSjs3fT_ntfsQM7vXJAqk117pQZ6g',
    authDomain: 'drama-button.firebaseapp.com',
    projectId: 'drama-button',
    storageBucket: 'drama-button.appspot.com',
    messagingSenderId: '110902447098',
    appId: '1:110902447098:web:58f8f7afaff93c796bb243',
    measurementId: 'G-BMHQ7FZ5LE',
  }
  firebase.initializeApp(config)
}

const app = firebase.app()

// export const auth = firebase.auth()

// export const storage = app.storage()

export const firestore = app.firestore()

export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp

export default firebase
