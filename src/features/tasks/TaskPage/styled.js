import styled from "styled-components";

export const TaskInformation = styled.p`
    margin: 30px;
    padding: 15px;
    border: solid 1px ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.defaultText};
    text-align: center;
`;

export const KeyField = styled.span`
    color: ${({ theme }) => theme.colors.primaryText};
    background-color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    padding: 5px;
    border: 0;
    border-radius: 5px;
    margin: 5px;
`;

export const ValueField = styled.span`
    background-color: ${({ theme }) => theme.colors.primaryText};
    color: ${({ theme }) => theme.colors.primary};
    padding: 5px;
    border: 0;
    border-radius: 5px;
    margin: 5px;
`;