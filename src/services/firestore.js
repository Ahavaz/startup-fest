import firebase from 'firebase'
import 'firebase/firestore'

import firebaseConfig from '../config/firebase'
import userInfo from '../utils/userInfo'

firebase.initializeApp(firebaseConfig)

// Initialize Cloud Firestore through Firebase
export const db = firebase.firestore()

firebase.auth().onAuthStateChanged(async user => {
  if (!user) {
    await firebase.auth().signInAnonymously()
  }

  userInfo.userId = firebase.auth().currentUser.uid
})

export const saveData = (ratingId, data) => {
  let ratingsRef = db.doc(`ratings/${ratingId}`)

  ratingsRef
    .set(data, { merge: true })
    .then(() => {})
    .catch(({ message }) => {
      alert('Error: ' + message)
    })
}
