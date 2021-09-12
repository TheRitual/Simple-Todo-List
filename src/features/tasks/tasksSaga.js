import { takeEvery, call, put, select, throttle } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTaskInLocalStorage } from "./tasksLocalStorage";
import { addMultipleTasks, fetchExampleTasks, selectTasks } from "./tasksSlice";

function* fetchExampleTaskHandler() {
    try {
        const sampleTasks = yield call(getExampleTasks);
        yield put(addMultipleTasks(sampleTasks));
    } catch (error) {
        call(alert, "Something went wrong!");
    }
}

function* saveTaskInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTaskInLocalStorage, tasks);
}

export function* tasksSaga() {
    yield throttle(3000, fetchExampleTasks.type, fetchExampleTaskHandler);
    yield takeEvery("*", saveTaskInLocalStorageHandler);
}