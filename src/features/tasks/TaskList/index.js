import { useDispatch, useSelector } from "react-redux";
import { removeTask, selectTasksState, toggleTaskDone } from "../tasksSlice";
import { TaskItem, TaskButton, TaskContent, StyledTaskList, Icon } from "./styled";
import binIcon from "./delete.png";
import { Link } from "react-router-dom";

const TaskList = () => {
    const { hideDone, tasks } = useSelector(selectTasksState);
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