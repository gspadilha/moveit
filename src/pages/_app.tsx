import { ChallengesContextProvider } from '../contexts/ChallengesContextProvider';
import { ThemeContextProvider } from '../contexts/ThemeContextProvider';

import { GlobalStyle } from '../styles';

import IApp from '../utils/props/app';

export default function App({ Component, pageProps }: IApp) {
  return (
    <ThemeContextProvider>
      <GlobalStyle />

      <ChallengesContextProvider>
        <Component {...pageProps} />
      </ChallengesContextProvider>
    </ThemeContextProvider>
  );
}
