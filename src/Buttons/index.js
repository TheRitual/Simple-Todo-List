import "./style.css";

const Buttons = (props) => (
     props.tasks.length > 0 && (
     <div className="buttons">
        <button className="buttons__button">
            {props.hideDone ? "Show" : "Hide"}
        </button>
        <button className="buttons__button" disabled={props.tasks.every(({done}) => done)}>
            Mark All as Done
        </button>
    </div>)
);

export default Buttons;