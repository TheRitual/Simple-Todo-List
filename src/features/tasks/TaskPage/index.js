import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container/styled";
import ThemeSwitch from "../../themeSwitch/ThemeSwitch";
import BackButton from "./BackButton";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import { TaskInformation, KeyField, ValueField } from "./styled";


function TaskPage() {

  const { id } = useParams();
  const task = useSelector(state => getTaskById(state, id));

  return (
    <Container>
      <Header title="Task Preview" />
      <Section title={task ? task.content : `Task doesn't exist`} body={
        <>
          {!task ?
            <TaskInformation>
              Can't find task with ID: {id}
            </TaskInformation>
            :
            (<>
              <TaskInformation>
                <KeyField>Done:</KeyField>
                <ValueField>
                  {task.done ? `Yes` : `No`}
                </ValueField>
              </TaskInformation>
              <TaskInformation>
                <KeyField>ID:</KeyField>
                <ValueField>{id}</ValueField>
              </TaskInformation>
            </>)
          }
          <BackButton />
        </>
      } extraHeaderContent={<ThemeSwitch />} />
    </Container>
  );
}

export default TaskPage;