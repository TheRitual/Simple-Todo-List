import ToggleSwitch from "../../features/themeSwitch/ToggleSwitch";
import { StyledHeader } from "./styled";

const Header = ({title}) => (
    <StyledHeader>
        <h1>{title}</h1>
        <ToggleSwitch />
    </StyledHeader>
);

export default Header;