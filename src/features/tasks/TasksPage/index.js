import Form from "../Form";
import Buttons from "../Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container/styled";
import TaskList from "../TaskList";
import Button from "../../../common/Button";
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../tasksSlice";
import ThemeSwitch from "../../themeSwitch/ThemeSwitch";
import Search from "../Search";


function TasksPage() {
  const dispatch = useDispatch();

  return (
    <Container>
      <Header title="ToDo List" />
      <Section title="Add a new Task" body={<Form />} extraHeaderContent={
        <>
          <Button onClick={() => dispatch(fetchExampleTasks())}> Get Sample Tasks </Button>
          <ThemeSwitch />
        </>
      } />
      <Section title="Search" body={<Search />} />
      <Section
        title="List of Tasks"
        extraHeaderContent={<Buttons />}
        body={<TaskList />}
      />
    </Container>
  );
}

export default TasksPage;
