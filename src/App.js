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
                <form>
                    <input className="form__input" placeholder="What to do?" />
                    <button className="form__button">Add Task</button>
                </form>
            </div>
        </section>

        <section className="section">
            <h2 className="section__header">List of Tasks</h2>
            <div className="section__body">
                <ul className="tasks"></ul>
            </div>
        </section>
    </main>
  );
}

export default App;
