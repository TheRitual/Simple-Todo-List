import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Author from "./features/author/Author";
import Menu from "./common/menu/Menu";
import Tasks from "./features/tasks/Tasks";
import { defaultTheme } from "./utils/themes";

const App = () => (
    <HashRouter>
        <ThemeProvider theme={defaultTheme}>
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
        </ThemeProvider>
    </HashRouter>
);

export default App;