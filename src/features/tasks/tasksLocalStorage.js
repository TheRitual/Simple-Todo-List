const localStorageKey = "tasks";

export const saveTaskInLocalStorage = tasks => {
    return localStorage.setItem(localStorageKey, JSON.stringify(tasks));
}

export const getTaskFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
}