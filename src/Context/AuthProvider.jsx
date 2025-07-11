import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import { AuthContext } from './AuthContext';

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (updatedData) =>{
        return updateProfile(auth.currentUser, updatedData);
    }

    const GoogleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const signOutUser = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const resetUserPassword=(email)=>{
        return sendPasswordResetEmail(auth,email);
    }

    useEffect( ()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser),
            setLoading(false),
            console.log('user in the auth state change', currentUser)
        })
        return () =>{
            unSubscribe();
        }
    }, [])

    const authInfo = {
        loading,
        user,
        createUser,
        signInUser,
        GoogleSignIn,
        signOutUser,
        resetUserPassword,
        updateUser,
        setUser
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;