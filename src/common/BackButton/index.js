import { Link } from "react-router-dom";
import { toTasks } from "../../routes";
import { BackButtonBlock } from "./styled";

const BackButton = () => (
    <BackButtonBlock>
        <Link to={toTasks()}>Back</Link>
    </BackButtonBlock>
);

export default BackButton;