import styled from "styled-components";

export const StyledSection = styled.section`
    margin: 10px 0;
    background: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.shadow};
`;

export const SectionHeader = styled.header`
    border-bottom: 1px solid ${({ theme }) => theme.colors.borders};
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    @media(max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const SectionTitle = styled.h2`
    font-size: 20px;
    margin: 0;
`;
    
export const SectionBody = styled.div`
    padding: 20px;
`