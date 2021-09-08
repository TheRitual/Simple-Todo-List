import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectTasks, toggleAllDone, toggleHideDone } from "../tasksSlice";
import { ButtonsContainer, Button } from "./styled";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return tasks.length > 0 && (
        <ButtonsContainer>
            <Button onClick={() => dispatch(toggleHideDone())}>
                {hideDone ? "Show" : "Hide"} done
            </Button>
            <Button onClick={() => dispatch(toggleAllDone())} disabled={tasks.every(({ done }) => done)}>
                Mark All as Done
            </Button>
        </ButtonsContainer>);

}


export default Buttons;