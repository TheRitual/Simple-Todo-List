import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { GlobalStyles } from "./GlobalStyles";
import { defaultTheme, darkTheme } from "./utils/themes";
import { selectIsDarkThemeOn } from "./features/themeSwitch/themeSlice";
import Author from "./features/author/AuthorPage";
import Menu from "./common/Menu";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AppWrapper from "./common/AppWrapper";

const App = () => {
    const selectedTheme = useSelector(selectIsDarkThemeOn) ? darkTheme : defaultTheme;
    return (
        <HashRouter>
            <ThemeProvider theme={selectedTheme}>
                <GlobalStyles />
                <AppWrapper>
                    <Menu />
                    <Switch>
                        <Route path="/tasks/:id">
                            <TaskPage />
                        </Route>
                        <Route path="/tasks">
                            <TasksPage />
                        </Route>
                        <Route path="/author">
                            <Author />
                        </Route>
                        <Route path="/">
                            <Redirect to="/tasks" />
                        </Route>
                    </Switch>
                </AppWrapper>
            </ThemeProvider>
        </HashRouter>
    )
};

export default App;