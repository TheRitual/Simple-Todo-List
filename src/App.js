import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { GlobalStyles } from "./GlobalStyles";
import { defaultTheme, darkTheme } from "./utils/themes";
import { selectIsDarkThemeOn } from "./features/themeSwitch/themeSlice";
import Author from "./features/author/AuthorPage";
import Navigation from "./common/Navigation";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AppWrapper from "./common/AppWrapper";
import { toAuthor, toTask, toTasks } from "./routes";

const App = () => {
    const selectedTheme = useSelector(selectIsDarkThemeOn) ? darkTheme : defaultTheme;
    return (
        <HashRouter>
            <ThemeProvider theme={selectedTheme}>
                <GlobalStyles />
                <AppWrapper>
                    <Navigation />
                    <Switch>
                        <Route path={toTask()}>
                            <TaskPage />
                        </Route>
                        <Route path={toTasks()}>
                            <TasksPage />
                        </Route>
                        <Route path={toAuthor()}>
                            <Author />
                        </Route>
                        <Route>
                            <Redirect to={toTasks()} />
                        </Route>
                    </Switch>
                </AppWrapper>
            </ThemeProvider>
        </HashRouter>
    )
};

export default App;