import "./style.css";

const Tasks = (props) => (
    <ul className="tasks">
        {props.tasks.map(task => (
            <li>
                {task.content}
            </li>
        ))}
    </ul>
);

export default Tasks;