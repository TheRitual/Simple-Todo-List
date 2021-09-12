import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import Author from "./features/author/Author";
import Menu from "./common/menu/Menu";
import Tasks from "./features/tasks/Tasks";

const App = () => (
    <HashRouter>
        <Menu />
        <Switch>
            <Route path="/tasks">
                <Tasks />
            </Route>
            <Route path="/author">
                <Author />
            </Route>
            <Route path="/">
                <Redirect to="/tasks" />
            </Route>
        </Switch>
    </HashRouter>
);

export default App;