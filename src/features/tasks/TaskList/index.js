import { useDispatch, useSelector } from "react-redux";
import { removeTask, selectHideDone, selectTasksByQuery, toggleTaskDone } from "../tasksSlice";
import { TaskItem, TaskButton, TaskContent, StyledTaskList, Icon } from "./styled";
import binIcon from "./delete.png";
import { Link, useLocation } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName";

const TaskList = () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);
    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();
    return (
        <StyledTaskList>
            {tasks.map(task => (
                <TaskItem key={task.id} hidden={task.done && hideDone}>
                    <TaskButton onClick={() => dispatch(toggleTaskDone(task.id))} done>
                        {task.done ? '✓' : ''}
                    </TaskButton>
                    <TaskContent done={task.done}>
                        <Link to={`/tasks/${task.id}`}>
                            {task.content}
                        </Link>
                    </TaskContent>
                    <TaskButton onClick={() => dispatch(removeTask(task.id))} removeButton>
                        <Icon src={binIcon} />
                    </TaskButton>
                </TaskItem>
            ))}
        </StyledTaskList>
    );
}

export default TaskList;