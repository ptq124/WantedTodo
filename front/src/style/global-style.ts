import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
export const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-family: Roboto,Arial,sans-serif;
    font-display: fallback;
    overflow-x: hidden;
    a {
      text-decoration: none;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
      color: inherit;
      font: inherit;
      margin: 0;
      background: #fff;
      border: none;
    }

    input,
    button,
    select,
    textarea {
      &:focus {
        outline: none;
      }
    }

    textarea {
      border: none;
      resize: none;
    }
  }
`;
