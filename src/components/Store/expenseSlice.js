import { createSlice } from "@reduxjs/toolkit";

const initialExpenseState = {
    expenses:[],
    expenseTotal:0,
};

const expenseSlice = createSlice({
    name: "expense",
    initialState: initialExpenseState,
    reducers:{
        setExpenses(state, action){
            state.expenses = action.payload;
            state.expenseTotal = action.payload.reduce((total, expense) => total + Number(expense.amount), 0);
        },
        addExpense(state, action){
            state.expenses.push(action.payload);
            state.expenseTotal = state.expenseTotal + Number(action.payload.amount);
        }
    }
});

export const expensesActions = expenseSlice.actions;
export default expenseSlice.reducer;
