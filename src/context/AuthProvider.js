import React, { createContext } from 'react';
import useDoctors from '../hooks/useDoctors';
import useFirebase from '../hooks/useFirebase';
import useServices from '../hooks/useServices';

// Code For AuthProvider

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const { services, setServices } = useServices();
    const { doctors, setDoctors } = useDoctors();
    const allContexts = useFirebase();
    const data = {
        allContexts,
        services,
        setServices,
        doctors,
        setDoctors
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;