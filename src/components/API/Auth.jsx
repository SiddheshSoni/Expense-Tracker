import React from "react";

const API_key ="AIzaSyC_T56zHD0P7_bI1MwqhUjBNCpO46JlbC8";


const SignUpAPI = async (email, password, isSignUp)=>{

    let authEndpoint = isSignUp? "signUp" :"signInWithPassword";
 
    try{
        const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:${authEndpoint}?key=${API_key}`,{
            method:'POST',
            body:JSON.stringify({
                email: email,
                password: password,
                returnSecureToken:true
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        });
 
        const data = await res.json();
        console.log(data);
 
        if(res.ok){
            // console.log(data.idToken);
            return { ok: true, data: data };
        } else {
            let errorMessage = "Authentication Failed";
            if(data && data.error && data.error.message){
                errorMessage = data.error.message;
            }
            return { ok: false, error: errorMessage };
        }
    }catch(err){
        console.log(err);
        return { ok: false, error: err.message || "A network error occurred." };
    }
};

export default SignUpAPI;
