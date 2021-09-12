import styled from "styled-components";

export const Container = styled.main`
    color: ${({ theme }) => theme.colors.defaultText};
    max-width: 900px;
    padding: 20px;
    margin: 0 auto;
    transition: ${({ theme }) => theme.transitions.long} ease-in-out;
`;