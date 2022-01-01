import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext(); //--->

const AuthProvider = ({ children }) => {
    // const { children } = props;
    const allContext = useFirebase();  //--> This will helps to call all the Route in The App.js  
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;