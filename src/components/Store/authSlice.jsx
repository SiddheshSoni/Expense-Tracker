import { createSlice } from "@reduxjs/toolkit";

const initialToken = localStorage.getItem('token');
const isUserLoggedIn = !!initialToken;

const initialAuthState ={
    idToken: initialToken,
    isLoggedIn: isUserLoggedIn,
};

const AuthSlice =createSlice( {
    name: "auth",
    initialState: initialAuthState,
    reducers:{
        onLogin(state, action){
            state.idToken = action.payload;
            state.isLoggedIn = true;
            localStorage.setItem('token', action.payload);
        },
        onLogout(state){
            state.idToken = null;
            state.isLoggedIn = false;
            localStorage.removeItem('token');
            localStorage.removeItem('premium');
            localStorage.removeItem('isDark');
        }
    }
});

export const authActions = AuthSlice.actions;
export default AuthSlice.reducer;