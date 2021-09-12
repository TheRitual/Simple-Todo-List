import styled from "styled-components";

export const ButtonsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`    
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: none;
    margin: 0 0 0 20px;
    transition: 0.3s;

    @media(max-width: 767px) {
        flex-basis: 100%;
    }

    &:hover {
        filter: brightness(1.3);
        transform: scale(1.07);
        text-shadow: 0 0 5px ${({ theme }) => theme.colors.shadow};
        cursor: pointer;
    }

    &:disabled {
        color: ${({ theme }) => theme.colors.disabled};
        cursor: not-allowed;
        transform: scale(1);
    }
`;