import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { createContext, useState} from "react";
import { useEffect } from "react";
import app from "../FairBase/firebass.config";

export const AuthContex=createContext(null);

const auth=getAuth(app);

 const AuthProniders= ({children})=>{

    const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)


    const createUser=(email,password)=>{

        return createUserWithEmailAndPassword(auth,email,password)
        
    }
 

const signIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}

const logOut=()=>{
 return   signOut(auth);
}


// observe auth state change

useEffect(()=>{
  const unsubscribe=  onAuthStateChanged(auth,currentUser=>{
        console.log('auth state change ',currentUser)
        setUser(currentUser)
        setLoading(false);
    });
    return ()=>{
        unsubscribe();
    }

},[])


  const authInfo={
       user,
       createUser,
       signIn,
       logOut,
       loading,
    }

    return (
      
<AuthContex.Provider value={authInfo}>

     {children}
      </AuthContex.Provider>

    )

}

export default AuthProniders;