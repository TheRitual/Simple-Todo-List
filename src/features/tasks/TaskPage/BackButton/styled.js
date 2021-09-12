import styled from "styled-components";

export const BackButtonBlock = styled.div`
    margin: 20px 0;
    padding: 0 0 0 30px;
    
    & a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 700;
    }

    & a:hover {
        filter: brightness(1.5);
    }
`;