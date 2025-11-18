import { configureStore} from "@reduxjs/toolkit";

import AuthReducer from "./authSlice"
import expenseReducer from "./expenseSlice";
import themeReducer from "./themeSlice"
import premiumReducer from "./premiumSlice"

const store = configureStore({
    reducer: { auth: AuthReducer, expense: expenseReducer, theme: themeReducer, premium: premiumReducer }
});

export default store;