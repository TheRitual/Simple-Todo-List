import styled from "styled-components";

export const NewTaskForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    
    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const NewTaskInput = styled.input`
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.colors.borders};
`;


export const NewTaskButton = styled.button`
    border:none;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryText};
    padding: 10px;
    transition: 0.3s;
    
    &:hover {
        filter: brightness(1.2);
        transform: scale(1.07);
        box-shadow: 0 0 3px ${({ theme }) => theme.colors.shadow};
    }

    &:active {
        filter: brightness(0.9);
        transform: scale(1.05);
    }
`;