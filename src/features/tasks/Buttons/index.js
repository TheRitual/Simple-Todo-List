import { useDispatch, useSelector } from "react-redux";
import { removeAll, selectTasks, toggleAllDone, toggleHideDone } from "../tasksSlice";
import { ButtonsContainer, Button } from "./styled";
import { fetchExampleTasks } from "../tasksSlice";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        <ButtonsContainer>
            <Button onClick={() => dispatch(fetchExampleTasks())}> Get Sample Tasks </Button>
            {tasks.length > 0 && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Show" : "Hide"} done
                    </Button>
                    <Button onClick={() => dispatch(toggleAllDone())} disabled={tasks.every(({ done }) => done)}>
                        Mark All as Done
                    </Button>
                    <Button onClick={() => dispatch(removeAll())}>
                        Remove All
                    </Button>
                </>)
            }
        </ButtonsContainer>
    );

}


export default Buttons;