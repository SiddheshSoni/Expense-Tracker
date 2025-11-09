import React from "react";

export const StoreContext = React.createContext({
    idToken: "",
    isLoggedIn: false,
    // eslint-disable-next-line no-unused-vars
    onLogin:(idToken)=>{},
    onLogout:()=>{},
});