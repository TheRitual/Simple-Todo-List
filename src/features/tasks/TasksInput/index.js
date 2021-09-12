import styled from "styled-components";

const TasksInput = styled.input`
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.colors.borders};
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.defaultText};
    transition: ${({ theme }) => theme.transitions.long};
`;

export default TasksInput;