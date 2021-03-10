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

// storing the users into the database
export const createUserProfileDocument = async (userAuth, additionData) => {
    //if user doesn't exist just return
    if(!userAuth) return 

    //there is an property of uid on the user
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    
    //using the reference Object to get the snapShot by using .get()
    const snapShot = await userRef.get()
    // gives us the 'exists' property 

    //if snapShot doesn't exist, create a new User 
    if(!snapShot.exists){
        //destructor the user info, from google login
        const { displayName, email } = userAuth
        const createAt = new Date()
        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    } 

    return userRef
}




firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase


