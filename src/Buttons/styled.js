import styled, { css } from "styled-components";

export const ButtonsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`    
    background: transparent;
    color: teal;
    border: none;
    margin: 0 0 0 20px;
    transition: color 0.3s;

    @media(max-width: 767px) {
        flex-basis: 100%;
    }

    &:hover {
        color: hsl(180, 100%, 35%);
    }

    &:disabled {
        color: #ccc;
    }
`;