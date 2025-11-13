import React from 'react'

const AddExpenseDB = async (newExpense) => {
    
    try{
        const res = await fetch(`https://expensetracker-3893d-default-rtdb.asia-southeast1.firebasedatabase.app/expenses.json`,{
            method: 'POST',
            body: JSON.stringify(newExpense),
            // headers:{ 
            //     'Content=Type':'application/json'
            // }
        });

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
const GetExpenseDB = async () => {
    
    try{
        const res = await fetch(`https://expensetracker-3893d-default-rtdb.asia-southeast1.firebasedatabase.app/expenses.json`,{
            method: 'GET',
            // body: JSON.stringify(),
            // headers:{ 
            //     'Content=Type':'application/json'
            // }
        });

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

export { AddExpenseDB, GetExpenseDB };