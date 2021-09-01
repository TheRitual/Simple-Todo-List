import styled, { css } from "styled-components";

export const TaskList = styled.ul`
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
    border-bottom: 1px solid #ddd;
    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const TaskButton = styled.button`
    border: 0;
    width: 30px;
    height: 30px;
    color: #fff;
    padding: 0;
    transition: 0.3s;
    cursor: pointer;

    ${({ done }) => done && css`
        background-color: hsl(120, 61%, 34%);
        &:hover {
            background-color: hsl(120, 61%, 39%);
        }
    `}

    ${({ removeButton }) => removeButton && css`
        background-color: hsl(348, 83%, 47%);
        &:hover {
            background-color: hsl(348, 83%, 52%);
        }
    `}
`;

export const TaskContent = styled.span`
    color: #000;
    transition: 0.5s;
    ${({ done }) => done && css`
        text-decoration: line-through;
        color: #999;
    `}
`;