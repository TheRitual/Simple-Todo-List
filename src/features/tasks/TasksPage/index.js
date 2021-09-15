import Form from "../Form";
import Buttons from "../Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container/styled";
import TaskList from "../TaskList";
import Button from "../../../common/Button";
import { useDispatch } from "react-redux";
import { fetchExampleTasks, selectIsLoading } from "../tasksSlice";
import Search from "../Search";
import { useSelector } from "react-redux";


function TasksPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  return (
    <Container>
      <Header title="ToDo List" />
      <Section title="Add a new Task" body={<Form />} extraHeaderContent={
        <>
          <Button disabled={isLoading} onClick={() => dispatch(fetchExampleTasks())}>
            {isLoading ? `Loading...` : `Get Sample Tasks`}
          </Button>
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
