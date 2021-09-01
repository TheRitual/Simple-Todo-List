import { useFormActions } from "./useFormActions";
import { NewTaskForm, NewTaskInput, NewTaskButton } from "./styled";

const Form = ({ addNewTask }) => {
    const { onFormSubmit, newTaskContent, setNewTaskContent, inputRef } = useFormActions(addNewTask);

    return (
        <NewTaskForm onSubmit={onFormSubmit}>
            <NewTaskInput
                autoFocus
                placeholder="What to do?"
                value={newTaskContent}
                onChange={(event) => setNewTaskContent(event.target.value)}
                ref={inputRef}
            />
            <NewTaskButton className="form__button">Add Task</NewTaskButton>
        </NewTaskForm>);
};

export default Form;