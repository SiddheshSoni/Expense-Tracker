import React from 'react'
const BASE_URL = `https://expensetracker-3893d-default-rtdb.asia-southeast1.firebasedatabase.app/`;

const RequestWrapper = async (path = 'expenses.json', { method= 'GET', body = null} ={})=>{
    const url = `${BASE_URL}${path}`;
    const options = {
        method,
        headers:{ 'Content-Type':'application/json'},
    };

    if(body){
        options.body = JSON.stringify(body);
    }

    try{
        const res = await fetch(url, options);
        const data = await res.json();

         if(res.ok){
            return { ok: true, data: data };
        }else{
            let errorMessage = "Authentication Failed";
            if(data && data.error && data.error.message){
                errorMessage = data.error.message;
            }
            return { ok: false, error: errorMessage };
        }

    }catch(err){
        console.log(err);
    };
}

const AddExpenseDB = async (newExpense) => {
    return await RequestWrapper('expenses.json',{method:'POST', body: newExpense });
};
const GetExpenseDB = async () => {
    return await RequestWrapper('expenses.json',{method:'GET'});
};

const DeleteExpenseDB = async (id) =>{
    return await RequestWrapper(`expenses/${id}.json` ,{ method:'DELETE'});
}

const EditExpenseDB = async (id) =>{
    return await RequestWrapper(`expenses/${id}.json`, { method:'PUT'});
}

export { AddExpenseDB, GetExpenseDB, DeleteExpenseDB, EditExpenseDB};