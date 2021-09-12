import { Link } from "react-router-dom";
import { BackButtonBlock } from "./styled";

const BackButton = () => (
    <BackButtonBlock>
        <Link to="/">Back</Link>
    </BackButtonBlock>
);

export default BackButton;