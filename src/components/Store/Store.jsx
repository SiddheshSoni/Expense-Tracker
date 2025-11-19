import { configureStore} from "@reduxjs/toolkit";

import AuthReducer from "./authSlice"
import expenseReducer from "./expenseSlice";
import premiumReducer from "./premiumSlice"
import themeReducer from "./themeSlice";

const store = configureStore({
    reducer: { auth: AuthReducer, expense: expenseReducer, premium: premiumReducer, theme : themeReducer }
});

export default store;