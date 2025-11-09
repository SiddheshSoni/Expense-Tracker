import React, { useState } from "react";
import { StoreContext } from "./StoreContext.jsx";

export const StoreProvider = (props) => {
    const initialToken = localStorage.getItem('token');

    const [token, setToken] = useState(initialToken);
    
    const isUserLoggedIn = !!token;


    const loginHandler = (idToken) => {
        setToken(idToken);
        localStorage.setItem('token', idToken);
    };

    const logoutHandler = () =>{
        setToken(null);
        localStorage.removeItem('token');
    };

    const defaultVal = {
        idToken: token,
        isLoggedIn: isUserLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
    }

    return(
        <StoreContext.Provider value={defaultVal}>
            {console.log(localStorage.getItem('token'))}
            {props.children}
        </StoreContext.Provider>
    )
};
