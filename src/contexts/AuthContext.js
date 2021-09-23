import React, { useContext } from 'react'
import app from '../firebase'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { getFirestore, doc, setDoc } from "firebase/firestore";

const auth = getAuth(app)
const db = getFirestore(app)
const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const signUp = async ({ email, fullname, username, password }) => {
        try {
            const createdUser = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(createdUser.user, {
                displayName: fullname
            })
            await setDoc(doc(db, 'users', createdUser.user.uid), {
                username,
                following: [],
                followers: [],
                bio: '',
                dateCreated: Date.now(),
            })
        } catch (error) {
            console.log(error.message);
        }
    }

    const value = {
        signUp
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
