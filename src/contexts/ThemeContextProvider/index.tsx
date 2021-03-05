import { FC, createContext, ReactNode, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles';

interface IThemeContextProviderProps {
  children: ReactNode;
}

interface IThemeContextDataProps {
  handleChangeMode: () => void;
}

export const ThemeChangerContext = createContext({} as IThemeContextDataProps);

export const ThemeContextProvider: FC<IThemeContextProviderProps> = ({
  children,
}) => {
  const [themeModeIsLight, setThemeModeIsLight] = useState(true);
  const [themeSelected, setThemeSelected] = useState(theme);

  const handleChangeMode = () => {
    setThemeModeIsLight(currentState => !currentState);
  };

  useEffect(() => {
    setThemeSelected({
      ...theme,
      mode: themeModeIsLight ? 'light' : 'dark',
    });
  }, [themeModeIsLight]);

  return (
    <ThemeChangerContext.Provider value={{ handleChangeMode }}>
      <ThemeProvider theme={themeSelected}>{children}</ThemeProvider>
    </ThemeChangerContext.Provider>
  );
};
