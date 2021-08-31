import { useLocalStorageState } from "./useLocalStorageState";

export const useTasks = () => {

    const [tasks, setTasks] = useLocalStorageState("taskList", []);

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    }

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }
            return task;
        }))
    }


    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({ ...task, done: !task.done })));
    }

    const addNewTask = (content) => {
        setTasks(tasks => [...tasks, {
            content,
            done: false,
            id: tasks.length ? tasks[tasks.length - 1].id + 1 : 0,
        }]);
    }

    return { tasks, removeTask, toggleTaskDone, setAllDone, addNewTask };

}