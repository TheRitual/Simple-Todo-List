import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
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
        }
    }
});

export const { addTask, toggleTaskDone, toggleAllDone, removeTask, toggleHideDone, fetchExampleTasks, addMultipleTasks, setTasks, removeAll } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;