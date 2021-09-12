import { createSlice } from "@reduxjs/toolkit";
import { getTaskFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTaskFromLocalStorage(),
        hideDone: false,
        isLoading: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleTaskDone: ({ tasks }, { payload: taskID }) => {
            const index = tasks.findIndex(task => task.id === taskID);
            tasks[index].done = !tasks[index].done;
        },
        toggleAllDone: ({ tasks }) => {
            tasks.forEach(task => task.done = true);
        },
        removeTask: ({ tasks }, { payload: taskID }) => {
            const index = tasks.findIndex(task => task.id === taskID);
            tasks.splice(index, 1);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        fetchExampleTasks: (state) => {
            state.isLoading = true;
        },
        fetchExampleTasksError: (state) => {
            state.isLoading = false;
        },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        },
        addFetchedTasks: (state, { payload: newTasks }) => {
            newTasks.forEach(task => state.tasks.push(task));
            state.isLoading = false;
        },
        removeAll: (store) => {
            store.tasks = [];
        },
    }
});

export const { addTask, toggleTaskDone, toggleAllDone, removeTask, toggleHideDone, fetchExampleTasks, addFetchedTasks, setTasks, removeAll, fetchExampleTasksError } = tasksSlice.actions;

export const selectTasksState = state => state.tasks;
export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectIsLoading = state => selectTasksState(state).isLoading;
export const selectAreAllTasksDone = state => selectTasks(state).every(task => task.done);
export const selectIsAnyTaskDone = state => selectTasks(state).some(task => task.done);
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;

export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);
    if (!query || query.trim() === "") { return tasks; }
    return tasks.filter(({ content }) => content.toUpperCase().includes(query.toUpperCase().trim()));
}


export const getTaskById = (state, taskId) => selectTasks(state).find(({ id }) => id === taskId);

export default tasksSlice.reducer;