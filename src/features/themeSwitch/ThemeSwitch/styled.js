import styled from "styled-components";

export const ToggleSlider = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    width: 42px;
    height: 26px;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.disabled};
    cursor: pointer;
    &::after {
        content: "";
        display: block;
        border-radius: 5px;
        width: 18px;
        height: 18px;
        margin: 3px;
        background: ${({ theme }) => theme.colors.primaryText};;
        transition: ${({ theme }) => theme.transitions.short};
    }
`;

export const Toggle = styled.input`
    opacity: 0;
    z-index: 1;
    border-radius: 5px;
    width: 42px;
    height: 26px;
    &:checked + ${ToggleSlider} {
        background: ${({ theme }) => theme.colors.primary};;
        &::after {
            content: "";
            display: block;
            border-radius: 5px;
            width: 18px;
            height: 18px;
            margin-left: 21px;
            transition: ${({ theme }) => theme.transitions.short};
        }
    }
`;

export const ToggleContainer = styled.div`
    position: relative;
`;