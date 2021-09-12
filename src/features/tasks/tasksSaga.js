import { nanoid } from "@reduxjs/toolkit";
import { takeEvery, call, put, select, throttle, delay } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTaskInLocalStorage } from "./tasksLocalStorage";
import { addFetchedTasks, fetchExampleTasks, fetchExampleTasksError, selectTasks } from "./tasksSlice";

function* fetchExampleTaskHandler() {
    try {
        yield delay(1000);
        const sampleTasks = yield call(getExampleTasks);
        const sampleTasksWithNewIds = sampleTasks.map(task => ({ ...task, id: nanoid() }));
        yield put(addFetchedTasks(sampleTasksWithNewIds));
    } catch (error) {
        yield put(fetchExampleTasksError());
        yield call(alert, "Something went wrong!");
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