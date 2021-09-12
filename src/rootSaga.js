import { all } from "@redux-saga/core/effects";
import { tasksSaga } from "./features/tasks/tasksSaga";

function* rootSaga () {
    yield all([
        tasksSaga(),
    ])
}

export default rootSaga;