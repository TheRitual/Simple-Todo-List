import { useFormActions } from "./useFormActions";
import "./style.css";



const Form = ({ addNewTask }) => {

    const { onFormSubmit, newTaskContent, setNewTaskContent, inputRef } = useFormActions(addNewTask);

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