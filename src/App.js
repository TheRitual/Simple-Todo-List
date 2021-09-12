import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import Author from "./features/author/Author";
import Menu from "./common/Menu";
import Tasks from "./features/tasks/Tasks";
import AppWrapper from "./common/AppWrapper";
import { defaultTheme, darkTheme } from "./utils/themes";
import { useSelector } from "react-redux";
import { selectIsDarkThemeOn } from "./features/themeSwitch/themeSlice";

const App = () => {
    const selectedTheme = useSelector(selectIsDarkThemeOn) ? darkTheme : defaultTheme;
    return (
        <HashRouter>
            <ThemeProvider theme={selectedTheme}>
                <GlobalStyles />
                <AppWrapper>
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
                </AppWrapper>
            </ThemeProvider>
        </HashRouter>
    )
};

export default App;