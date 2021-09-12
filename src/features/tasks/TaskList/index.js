import { useDispatch, useSelector } from "react-redux";
import { removeTask, selectHideDone, selectTasksByQuery, toggleTaskDone } from "../tasksSlice";
import { TaskItem, TaskButton, TaskContent, StyledTaskList, Icon } from "./styled";
import binIcon from "./delete.png";
import { Link } from "react-router-dom";
import { toTask } from "../../../routes";
import { useQueryParameter } from "../../../utils/queryParameters";
import searchQueryParamName from "../searchQueryParamName";

const TaskList = () => {
    const query = useQueryParameter(searchQueryParamName);
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
                        <Link to={toTask({ id: task.id })}>
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