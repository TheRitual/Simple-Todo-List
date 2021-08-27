import "./style.css";

const Form = () => (
    <form className="form">
        <input className="form__input" autoFocus placeholder="What to do?" />
        <button className="form__button">Add Task</button>
    </form>
);

export default Form;