import { takeEvery, call, put } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { addMultipleTasks, fetchExampleTasks } from "./tasksSlice";

function* fetchExampleTaskHandler() {
    try {
        const sampleTasks = yield call(getExampleTasks);
        yield put(addMultipleTasks(sampleTasks));
    } catch (error) {
        call(alert, "Something went wrong!");
    }
}

export function* watchFetchExampleTasks() {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTaskHandler);
}