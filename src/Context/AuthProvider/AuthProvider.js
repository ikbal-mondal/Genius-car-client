import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut}  from 'firebase/auth'
import app from '../../firebase/Firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext()
const auth = getAuth(app) 
const AuthProvider = ({children}) => {
    const [user,SetUser] = useState(null)
    console.log(user);
  const [loading,SetLoading] = useState(true)

 const createUser = (email,password) => {
   SetLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
 }


 const login = (email,password) => {
   SetLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
 }

const logOut = () => {
  return signOut(auth)
}


 useEffect(() => {

   const unsubscribe =  onAuthStateChanged(auth,currentUser =>  {
        console.log(currentUser);
        SetUser(currentUser)
        SetLoading(false)
     });
     return () => {
        return unsubscribe();
     }
 },[])

    const authInfo = {

         user,
         loading,
         createUser,
         login,
         logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;