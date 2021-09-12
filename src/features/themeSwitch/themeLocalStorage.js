const localStorageKey = "theme";

export const saveThemeInLocalStorage = theme => {
    return localStorage.setItem(localStorageKey, JSON.stringify(theme));
}

export const getThemeFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || false;
}