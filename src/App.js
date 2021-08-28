import Form from "./Form";
import Tasks from "./Tasks"
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  {id : 1, content : "Przejść na Reacta", done : false},
  {id : 2, content : "Zjeść obiad", done : true},
]

const hideDone = false;  

function App() {
  return (
    <Container>
        <Header title="ToDo List"/>
        <Section
          title="Add a new Task"
          body={<Form />}
        />
        <Section
          title="List of Tasks"
          extraHeaderContent={<Buttons
              tasks={tasks}
              hideDone={hideDone}
          />}
          body={<Tasks
            tasks={tasks}
            hideDone={hideDone}/>}
        />
    </Container>
  );
}

export default App;
