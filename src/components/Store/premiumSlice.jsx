import { createSlice } from "@reduxjs/toolkit";

const isPremium = localStorage.getItem("premium");

const initialState = {
    premium : isPremium,
}
const premiumSlice = createSlice({
    name: 'premium',
    initialState,
    reducers:{
        togglePremium(state){
            state.premium = true;
            localStorage.setItem("premium", true);
        }
    }
});

export const premiumActions = premiumSlice.actions;
export default premiumSlice.reducer;
