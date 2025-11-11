import React from "react";
const API_key ="AIzaSyC_T56zHD0P7_bI1MwqhUjBNCpO46JlbC8";

const SendOobCode = async ( requestType, Email ) =>{
    const token = localStorage.getItem('token');
    let reqPay = {
        requestType: requestType,
    }
    if (Email) {
        reqPay.email = Email;
    } else {
        reqPay.idToken = token;
    }
    try{
        const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${API_key}`,{
            method:'POST',
            body:JSON.stringify({
                ...reqPay,
                returnSecureToken:true
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();

        if(res.ok){
            console.log(data);
            return { ok: true, data: data };
        }else {
            let errorMessage = "Cannot send code!! Failed";
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

// const ConfirmEmail= async () =>{
//     // const token = localStorage.getItem('token');

//     // try{
//     //     const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_key}`,{
//     //         method:'POST',
//     //         body:JSON.stringify({
//     //             oobCode: ,
//     //         }),
//     //         headers:{
//     //             'Content-Type': 'application/json'
//     //         }
//     //     });

//     //     const data = await res.json();

//     //     if(res.ok){
//     //         console.log(data);
//     //         return { ok: true, data: data };
//     //     }else {
//     //         let errorMessage = "Cannot send code!! Failed";
//     //         if(data && data.error && data.error.message){
//     //             errorMessage = data.error.message;
//     //         }
//     //         return { ok: false, error: errorMessage };
//     //     }
//     // }catch(err){
//     //     console.log(err);
//     //     return { ok: false, error: err.message || "A network error occurred." };
//     // }
// };

export { SendOobCode};