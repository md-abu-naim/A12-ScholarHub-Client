import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider,
 createUserWithEmailAndPassword,onAuthStateChanged,
 signInWithEmailAndPassword,signInWithPopup,signOut,
 updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
// import axios from "axios";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInwithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const signInwithgithub = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const updateUser = (name, photoURL) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
    }

    const logOutUser = () => {
        setLoading(true)
        // axios('https://granny-resturant-server.vercel.app/logOut', {withCredentials: true})
        // .then(data => console.log(data.data))
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubscribe()
    }, [])

    const authInfo = {createUser, signInwithGoogle,
     loading, user, setUser, loginUser, updateUser,
     logOutUser, signInwithgithub}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;