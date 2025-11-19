import { createSlice } from "@reduxjs/toolkit";

const initialThemeState = {
    isDark: localStorage.getItem("isDark") === "true"
};

const themeSlice = createSlice({
    name: 'theme',
    initialState: initialThemeState,
    reducers: {
        toggleTheme(state) {
            state.isDark = !state.isDark
            localStorage.setItem("isDark", String(state.isDark));
        },
    },
});

export const themeActions = themeSlice.actions;
export default themeSlice.reducer;
