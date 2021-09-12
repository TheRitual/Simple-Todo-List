import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationWrapper = styled.nav`
    width: 100%;
`;

export const LinkList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 18px;
    border: 0px;
    width: 100%;
`;

export const LinkItem = styled.li`
    text-align: center;
    flex-grow: 1;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const StyledNavLink = styled(NavLink)`
    padding: 10px;
    display: block;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryText};
    text-decoration: none;
    font-weight: 700;
    transition: ${({ theme }) => theme.transitions.short};

    &:hover{
        filter: brightness(1.2);
        box-shadow: 0 2px 2px ${({ theme }) => theme.colors.primary};
    }

    &.active{
        filter: brightness(1.3);
    }
`;