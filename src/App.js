import Form from "./Form";
import Tasks from "./Tasks"
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useState } from "react";
import { useTasks } from "./utils/useTasks";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const { tasks, removeTask, toggleTaskDone, setAllDone, addNewTask } = useTasks();

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
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
