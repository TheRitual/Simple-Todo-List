import Form from "./Form";
import Tasks from "./Tasks"

const tasks = [
  {id : 1, content : "Przejść na Reacta", done : false},
  {id : 2, content : "Zjeść obiad", done : true},
]

const hideDoneTasks = false;  

function App() {
  return (
    <main className="main">
        <header>
            <h1>Task List</h1>
        </header>
        <section className="section">
            <h2 className="section__header">Add a new Task</h2>
            <div className="section__body">
                <Form />
            </div>
        </section>

        <section className="section">
            <h2 className="section__header">List of Tasks</h2>
            <div className="section__body">
                <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
            </div>
        </section>
    </main>
  );
}

export default App;
