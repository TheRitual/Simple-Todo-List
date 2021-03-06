import styled, { css } from "styled-components";

export const StyledTaskList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const TaskItem = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borders};
    border-top: 1px solid ${({ theme }) => theme.colors.borders};
    ${({ hidden }) => hidden && css`
        display: none;
    `}
    &:hover {
        filter: drop-shadow(0 0 5px ${({ theme }) => theme.colors.primary});
    }
`;

export const TaskButton = styled.button`
    border: 0;
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.colors.primaryText};
    padding: 0;
    transition: ${({ theme }) => theme.transitions.short};
    cursor: pointer;

    ${({ done }) => done && css`
        background-color: ${({ theme }) => theme.colors.doneBox};
        &:hover {
            filter: brightness(1.5);
        }
    `}

    ${({ removeButton }) => removeButton && css`
        background-color: ${({ theme }) => theme.colors.removeBox};
        &:hover {
            filter: brightness(1.5);
        }
    `}
`;

export const TaskContent = styled.span`
    color:  ${({ theme }) => theme.colors.defaultText};
    transition: ${({ theme }) => theme.transitions.middle};
    ${({ done }) => done && css`
        text-decoration: line-through;
        color: ${({ theme }) => theme.colors.disabled};
    `}
    & a {
        text-decoration: none;
        color:  ${({ theme }) => theme.colors.defaultText};
    }
`;

export const Icon = styled.img`
    width: 20px;
    margin: 5px;
    padding: 0;
    filter: invert(${({ theme }) => theme.filters.invert});
    transition: ${({ theme }) => theme.transitions.middle};
`;