import { all } from "@redux-saga/core/effects";
import { tasksSaga } from "./features/tasks/tasksSaga";
import { themeSaga } from "./features/themeSwitch/themeSaga";

function* rootSaga () {
    yield all([
        tasksSaga(),
        themeSaga(),
    ])
}

export default rootSaga;