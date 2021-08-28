import Form from "./Form";
import Tasks from "./Tasks"
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useState } from "react";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      content: "Przejść na Reacta",
      done: false
    }, {
      id: 2,
      content: "Zjeść obiad",
      done: true
    }
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  }

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  }

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if(task.id === id) {
        return {...task, done: !task.done};
      }
      return task;
    }))
  }

  return (
    <Container>
      <Header title="ToDo List" />
      <Section title="Add a new Task" body={< Form />} />
      <Section
        title="List of Tasks"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
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
