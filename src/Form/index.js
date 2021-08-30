import { useState } from "react";
import "./style.css";

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("");



    const onFormSubmit = (event) => {
        event.preventDefault();
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
            />
            <button className="form__button">Add Task</button>
        </form>);
};

export default Form;