import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from "./GlobalStyles";
//import { configureStore } from "@reduxjs/toolkit";
import Tasks from './features/tasks/Tasks';

/*

const initialState = { tasks: [] };

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "tasks/addTask":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { content: action.payload, done: false },
        ],
      }
    default:
      return state;
  }
}

const store = configureStore({ reducer: tasksReducer });
const addAction = content => {return {type: "tasks/addTask", payload : content}};
const selectTasks = ({tasks}) => tasks;
console.log(selectTasks(store.getState()));

store.dispatch(addAction("Learn Redux"));
store.dispatch(addAction("Learn reducers"));
store.dispatch(addAction("Learn dispatch"));

console.log(selectTasks(store.getState()));

*/

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Tasks />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
