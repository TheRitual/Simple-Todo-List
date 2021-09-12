import { useQueryParameter, useReplaceQueryParameter } from "../../../utils/queryParameters";
import searchQueryParamName from "../searchQueryParamName";
import TasksInput from "../TasksInput";
import { TasksInputWrapper } from "./styled";

const Search = () => {
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({key: searchQueryParamName, value: target.value.trim() !== "" ? target.value.trim() : undefined});
    }

    return (
        <TasksInputWrapper>
            <TasksInput placeholder="Filter Tasks" value={query || ""} onChange={onInputChange} />
        </TasksInputWrapper>
    );
}

export default Search;