import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import * as Google from 'expo-google-app-auth';
import {ANDROID_CLIENT_ID} from '@env';
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential, signOut } from '@firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext({});

const config = {
    androidClientId:ANDROID_CLIENT_ID,
    scopes:["profile","email"],
    permissions:["public_profile","email","gender","location"]
}

export const AuthProvider = ({children}) => {
    const [error, setError] = useState(null);
    const [user,setUser] = useState(null);
    const [loadingInitial,setLoadingInitial]= useState(true);
    const[loading,setLoading]=useState(false);
    useEffect(()=> onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user);
            }
            else{
                setUser(null);
            }
            setLoadingInitial(false);
        })
    ,[])
    //Sign function
    const signInWithGoogle = async () =>{
        setLoading(true);
        await Google.logInAsync(config).then(async(loginResult)=>{
            if (loginResult.type ==='success'){
                //login..
                const {idToken, accesToken}= loginResult;
                const credential = GoogleAuthProvider.credential(idToken,accesToken);
                await signInWithCredential(auth,credential)
            }
            return Promise.reject();
        }).catch(error=>setError(error)).finally(()=>setLoading(false))
    }
    //Signout function
    const logout = ()=>{
        setLoading(true);
        signOut(auth).catch(error=>setError(error)).finally(()=>setLoading(false))
    }

    const memoedValue = useMemo(()=>({
        user,
        loading,
        error,
        signInWithGoogle,
        logout
    }),[user,loading,error]);

    return (
        <AuthContext.Provider value={
            memoedValue
        }>
            {!loadingInitial && children}
        </AuthContext.Provider>
    )
}

export default function useAuth(){
    return useContext(AuthContext);
}

