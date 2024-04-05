import { createGlobalStyle } from 'styled-components';

import colors from './colors.styles';
import spacing from './spacing.styles';

export default createGlobalStyle`
    *:focus {
        outline: 0;
    }
    
    :root {
        ${colors}
        ${spacing}
    }

    html {
        font-size: 10px;
    }

    body {
        font-family: 'Ubuntu', sans-serif;
        background-color: var(--background-blue);
        border: none;
        background-repeat: no-repeat;
        margin: 0;
        color: var(--dark-grey);
    }

    a {        
        text-decoration: none;
    }

    button {
        cursor: pointer;        
        transition: filter 0.3s;        
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);

        &:hover {
            filter: brightness(90%);
        }

        :disabled {
            opacity: 0.4;
        }
    }
`;
