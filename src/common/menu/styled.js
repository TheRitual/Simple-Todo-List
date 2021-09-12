import styled from "styled-components";

export const LinkList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 18px;
    border: 0px;
    background-color: #FFF;
    width: 100%;
`;

export const LinkItem = styled.li`
    flex-grow: 1;
    text-align: center;
    & a{
        display: block;
        padding: 10px;
        background-color: rgb(0,128,128);
        color: #FFF;
        text-decoration: none;
        font-weight: 700;
        transition: 0.2s;
    }

    & a:hover{
        background-color: #FFF;
        color: rgb(0,128,128);
        text-decoration: none;
        font-weight: 700;
        box-shadow: 0 2px 2px rgba(31, 31, 31, 0.5);
    }
`;