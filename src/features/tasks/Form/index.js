import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "../tasksSlice";
import { useRef, useState } from "react";
import { NewTaskForm, NewTaskButton } from "./styled";
import TasksInput from "../TasksInput";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        inputRef.current.focus();
        const content = newTaskContent.replace(/ +(?= )/g, '').trim();
        setNewTaskContent(content);
        if (content !== "") {
            dispatch(addTask({
                content: newTaskContent,
                done: false,
                id: nanoid(),
            }));
            setNewTaskContent("");
        }

    }

    return (
        <NewTaskForm onSubmit={onFormSubmit}>
            <TasksInput
                autoFocus
                placeholder="What to do?"
                value={newTaskContent}
                onChange={(event) => setNewTaskContent(event.target.value)}
                ref={inputRef}
            />
            <NewTaskButton>Add Task</NewTaskButton>
        </NewTaskForm>);
};

export default Form;