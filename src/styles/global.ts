import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { getLodash } from '../utils/getLodash';
import { ThemeType } from './theme';

interface IThemeProps {
  theme: ThemeType;
}

const GlobalStyle = createGlobalStyle<IThemeProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fontFamily.Inter}, sans-serif;
  }

  ${normalize}

  @media(max-width:1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width:720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: ${({ theme }) =>
      getLodash(theme, `${theme.mode}.backgroundColor`)};
    color: ${({ theme }) => getLodash(theme, `${theme.mode}.fontColor`)};
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  #__next {
    height: 100vh;
    max-width: 992px;
    margin: 0 auto;
    padding: 2.5rem 2rem;

    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
