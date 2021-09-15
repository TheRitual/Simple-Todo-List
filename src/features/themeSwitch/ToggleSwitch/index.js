import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkThemeOn, toggleTheme } from "../themeSlice";
import { Toggle, ToggleContainer, ToggleSlider } from "./styled";

const ToggleSwitch = () => {
    const isDarkThemeOn = useSelector(selectIsDarkThemeOn);
    const dispatch = useDispatch();

    return (
        <ToggleContainer>
            <Toggle onChange={() => dispatch(toggleTheme())} checked={isDarkThemeOn} id="toggleTheme" type="checkbox" />
            <ToggleSlider htmlFor="toggleTheme" />
        </ToggleContainer>
    );
}

export default ToggleSwitch;