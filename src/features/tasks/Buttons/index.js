import { ButtonsContainer, Button } from "./styled";

const Buttons = (props) => (
     props.tasks.length > 0 && (
     <ButtonsContainer>
        <Button onClick={props.toggleHideDone}>
            {props.hideDone ? "Show" : "Hide"} done
        </Button>
        <Button onClick={props.setAllDone} disabled={props.tasks.every(({done}) => done)}>
            Mark All as Done
        </Button>
    </ButtonsContainer>)
);

export default Buttons;