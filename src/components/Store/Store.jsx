import { configureStore} from "@reduxjs/toolkit";

import AuthReducer from "./authSlice"
import expenseReducer from "./expenseSlice";

const store = configureStore({
    reducer: { auth: AuthReducer, expense: expenseReducer }
});

export default store;