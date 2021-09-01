import { TaskList, TaskItem, TaskButton, TaskContent } from "./styled";

const Tasks = (props) => (
    <TaskList>
        {props.tasks.map(task => (
            <TaskItem key={task.id} hidden={task.done && props.hideDone}>
                <TaskButton onClick={() => props.toggleTaskDone(task.id)} done>
                    {task.done ? '✓' : ''}
                </TaskButton>
                <TaskContent done={task.done}>
                    {task.content}
                </TaskContent>
                <TaskButton onClick={() => props.removeTask(task.id)} removeButton>🗑</TaskButton>
            </TaskItem>
        ))}
    </TaskList>
);

export default Tasks;