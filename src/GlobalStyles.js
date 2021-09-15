import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
        -webkit-font-smoothing: inherit;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        overflow-y: scroll;
    }

    input {
        font-family: 'Montserrat', sans-serif;
    }
`;