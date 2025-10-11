import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { getLocalStorage } from '../utils/localstorage';

export const AuthContext=createContext();

const AuthProvider= ({children})=>{
    const [userData,setuserData]=useState(null);

    useEffect(()=>{
         const {employee}=getLocalStorage()
         setuserData(employee)
    },[]) 
    return(
        <div>
            <AuthContext.Provider value={[userData,setuserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}
export default AuthProvider