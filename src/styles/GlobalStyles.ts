import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        
        box-sizing: border-box;
    }
    body {
        width: 100%;
        height: 100vh;
    }
    button {
        cursor: pointer;
    }
`