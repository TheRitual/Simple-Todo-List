import { Toggle, ToggleContainer, ToggleSlider } from "./styled";

const ThemeSwitch = () => (
    <ToggleContainer>
        <Toggle id="toggleTheme" type="checkbox" />
        <ToggleSlider htmlFor="toggleTheme" />
    </ToggleContainer>
);


export default ThemeSwitch;