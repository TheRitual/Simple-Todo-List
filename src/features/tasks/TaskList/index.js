import { useDispatch, useSelector } from "react-redux";
import { removeTask, selectTasksState, toggleTaskDone } from "../tasksSlice";
import { TaskItem, TaskButton, TaskContent, StyledTaskList } from "./styled";

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
                        {task.content}
                    </TaskContent>
                    <TaskButton onClick={() => dispatch(removeTask(task.id))} removeButton>🗑</TaskButton>
                </TaskItem>
            ))}
        </StyledTaskList>
    );
}

export default TaskList;