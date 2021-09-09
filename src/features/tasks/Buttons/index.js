import { useDispatch, useSelector } from "react-redux";
import { removeAll, selectAreAllTasksDone, selectAreTasksEmpty, selectHideDone, selectIsAnyTaskDone, toggleAllDone, toggleHideDone } from "../tasksSlice";
import { ButtonsContainer, Button } from "./styled";
import { fetchExampleTasks } from "../tasksSlice";

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const areAllDone = useSelector(selectAreAllTasksDone);
    const isAnyDone = useSelector(selectIsAnyTaskDone);
    const dispatch = useDispatch();

    return (
        <ButtonsContainer>
            <Button onClick={() => dispatch(fetchExampleTasks())}> Get Sample Tasks </Button>
            {!useSelector(selectAreTasksEmpty) && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())} disabled={!isAnyDone}>
                        {hideDone ? "Show" : "Hide"} done
                    </Button>
                    <Button onClick={() => dispatch(toggleAllDone())} disabled={areAllDone}>
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