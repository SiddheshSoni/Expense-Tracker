import React from "react";

const API_key ="AIzaSyC_T56zHD0P7_bI1MwqhUjBNCpO46JlbC8";


const UpdateProfile = async (updates) =>{
    const token = localStorage.getItem('token');

    try{    
        const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_key}`, {
            method: 'POST',
            body: JSON.stringify({
                idToken : token ,
                displayName : updates.name,
                photoUrl : updates.Url,
                returnSecureToken:true
            }),
            header:{
                'Content-Type' : 'application/json'
            }
        });
        const data = await res.json();

        if(res.ok){
            console.log(data.idToken);
            return { ok: true, data: data };
        } else {
            let errorMessage = "Request Failed";
            if(data && data.error && data.error.message){
                errorMessage = data.error.message;
            }
            return { ok: false, error: errorMessage };
        }
    }catch(err){
        console.log(err);
    }
};

export default UpdateProfile;