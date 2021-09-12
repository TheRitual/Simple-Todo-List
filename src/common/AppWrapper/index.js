import styled from "styled-components";

const AppWrapper = styled.div`
    color: ${({ theme }) => theme.colors.defaultText};
    border: 0;
    padding:0;
    margin: 0;
    width: 100%;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.mainBackground};
    transition: ${({ theme }) => theme.transitions.long} ease-in-out;
`;


export default AppWrapper;