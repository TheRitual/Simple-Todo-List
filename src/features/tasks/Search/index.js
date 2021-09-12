import { useHistory, useLocation } from "react-router";
import searchQueryParamName from "../searchQueryParamName";
import TasksInput from "../TasksInput";
import { TasksInputWrapper } from "./styled";

const Search = () => {
    const location = useLocation();
    const history = useHistory();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    const onInputChange = ({ target }) => {
        const searchParams = new URLSearchParams(location.search);
        if (target.value.trim() === "") {
            searchParams.delete(searchQueryParamName);
        } else {
            searchParams.set(searchQueryParamName, target.value);
        }
        history.push(`${location.pathname}?${searchParams.toString()}`);
    }

    return (
        <TasksInputWrapper>
            <TasksInput placeholder="Filter Tasks" value={query || ""} onChange={onInputChange} />
        </TasksInputWrapper>
    );
}

export default Search;