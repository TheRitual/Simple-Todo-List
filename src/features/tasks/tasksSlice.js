import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { getTaskFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTaskFromLocalStorage(),
        hideDone: false,
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
        fetchExampleTasks: () => { },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks.map(task => {
                return { ...task, id: nanoid() };
            });;
        },
        addMultipleTasks: ({ tasks }, { payload: newTasks }) => {
            newTasks.forEach(task => tasks.push({ ...task, id: nanoid() }));
        },
        removeAll: (store) => {
            store.tasks = [];
        },
    }
});

export const { addTask, toggleTaskDone, toggleAllDone, removeTask, toggleHideDone, fetchExampleTasks, addMultipleTasks, setTasks, removeAll } = tasksSlice.actions;

export const selectTasksState = state => state.tasks;
export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectAreAllTasksDone = state => selectTasks(state).every(task => task.done);
export const selectIsAnyTaskDone = state => selectTasks(state).some(task => task.done);
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;

export const getTaskById  = (state, taskId) => selectTasks(state).find(({id}) => id === taskId);

export default tasksSlice.reducer;