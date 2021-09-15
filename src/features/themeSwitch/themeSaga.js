import { takeEvery, call, select } from "redux-saga/effects";
import { saveThemeInLocalStorage } from "./themeLocalStorage";
import { selectIsDarkThemeOn } from "./themeSlice";

function* saveThemeInLocalStorageHandler() {
    const theme = yield select(selectIsDarkThemeOn);
    yield call(saveThemeInLocalStorage, theme);
}

export function* themeSaga() {
    yield takeEvery("*", saveThemeInLocalStorageHandler);
}