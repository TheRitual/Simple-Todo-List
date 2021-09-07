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
    border: 1px solid #ddd;
`;


export const NewTaskButton = styled.button`
    border:none;
    background-color: #008080;
    color: #fff;
    padding: 10px;
    transition: 0.3s;
    
    &:hover {
        background-color: rgb(0, 153, 153);
        transform: scale(1.1);
    }

    &:active {
        background-color: rgb(0, 179, 179);
    }
`;