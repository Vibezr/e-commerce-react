import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.util";


//actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrrentUser: () => null,
});


export const UserProvider = ({ children }) => {
    const [currentUser, setCurrrentUser] = useState(null)
    const value = { currentUser, setCurrrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user) {
                createUserDocumentFromAuth(user)
            }
            setCurrrentUser(user)
        });

        return unsubscribe
    }, []);

    return <UserContext.Provider value={value}> {children} </UserContext.Provider>
};

