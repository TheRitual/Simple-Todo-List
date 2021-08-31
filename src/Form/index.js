import { useRef, useState } from "react";
import "./style.css";

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        inputRef.current.focus();
        setNewTaskContent(newTaskContent.replace(/ +(?= )/g, '').trim());
        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            setNewTaskContent("");
        }

    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                className="form__input"
                autoFocus
                placeholder="What to do?"
                value={newTaskContent}
                onChange={(event) => setNewTaskContent(event.target.value)}
                ref={inputRef}
            />
            <button className="form__button">Add Task</button>
        </form>);
};

export default Form;