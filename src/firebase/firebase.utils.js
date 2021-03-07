// import firebase/app portion 
import firebase from 'firebase/app'

// import the method 
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyCVYytQIh68-n36xbkitqkIOSUkjNPMKDE",
    authDomain: "crown-db-bcd89.firebaseapp.com",
    projectId: "crown-db-bcd89",
    storageBucket: "crown-db-bcd89.appspot.com",
    messagingSenderId: "917104080541",
    appId: "1:917104080541:web:45a7d186f1786f1f960674",
    measurementId: "G-Z1QLLL9XES"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase


