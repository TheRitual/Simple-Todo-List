import { createSlice } from "@reduxjs/toolkit";
import { getThemeFromLocalStorage } from "./themeLocalStorage";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        isDarkThemeOn: getThemeFromLocalStorage(),
    },
    reducers: {
        toggleTheme: (store) => {
            store.isDarkThemeOn = !store.isDarkThemeOn;
            console.log(store.isDarkThemeOn);
        }
    }
});

export const { toggleTheme } = themeSlice.actions;

export const selectThemeState = state => { console.log(state); return state.theme;}
export const selectIsDarkThemeOn = state => selectThemeState(state).isDarkThemeOn;
export default themeSlice.reducer;