import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    premium : false,
}
const premiumSlice = createSlice({
    name: 'premium',
    initialState,
    reducers:{
        togglePremium(state){
            state.premium = true;
        }
    }
});

export const premiumActions = premiumSlice.actions;
export default premiumSlice.reducer;
