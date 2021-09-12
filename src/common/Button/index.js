import styled from "styled-components";

const Button = styled.button`    
background: transparent;
color: ${({ theme }) => theme.colors.primary};
border: none;
margin: 0 0 0 20px;
transition: ${({ theme }) => theme.transitions.middle};

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

export default Button;