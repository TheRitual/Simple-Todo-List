import Form from "./Form";
import Tasks from "./Tasks"
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useEffect, useState } from "react";

function App() {
  const localStorageList = localStorage.getItem("taskList");

  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(
    localStorageList ?
    JSON.parse(localStorageList) :
    []
  );

    useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(tasks));
  }, [tasks]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  }

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

  return (
    <Container>
      <Header title="ToDo List" />
      <Section title="Add a new Task" body={< Form addNewTask={addNewTask} />} />
      <Section
        title="List of Tasks"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />}
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />}
      />
    </Container>
  );
}

export default App;
