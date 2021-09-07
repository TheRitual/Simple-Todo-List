import Form from "./Form";

import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/Container/styled";
import { useState } from "react";
import { useTasks } from "../../utils/useTasks";
import TaskList from "./TaskList";

function Tasks() {
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
          <TaskList
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />}
      />
    </Container>
  );
}

export default Tasks;
