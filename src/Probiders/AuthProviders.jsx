import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useState} from "react";
import app from "../FairBase/firebass.config";

export const AuthContex=createContext(null);

const auth=getAuth(app);

 const AuthProniders= ({children})=>{

    const [user,setUser]=useState(null)

    const createUser=(email,password)=>{

        return createUserWithEmailAndPassword(auth,email,password)
        
    }
 

const signIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}



  const authInfo={
       user,
       createUser,
       signIn,
    }

    return (
      
<AuthContex.Provider value={authInfo}>

     {children}
      </AuthContex.Provider>

    )

}

export default AuthProniders;