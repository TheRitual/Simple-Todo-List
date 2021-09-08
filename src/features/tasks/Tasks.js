import Form from "./Form";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/Container/styled";
import TaskList from "./TaskList";

function Tasks() {

  return (
    <Container>
      <Header title="ToDo List" />
      <Section title="Add a new Task" body={<Form />} />
      <Section
        title="List of Tasks"
        extraHeaderContent={<Buttons />}
        body={<TaskList />}
      />
    </Container>
  );
}

export default Tasks;
