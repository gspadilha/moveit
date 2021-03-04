const theme = {
  mode: 'light',
  white: '#ffffff',
  black: '#000000',
  fontFamily: {
    Inter: 'Inter',
    Rajdhani: 'Rajdhani',
  },
  light: {
    background: '#ffffff',
    backgroundColor: '#f2f3f5',
    fontColor: '#666666',
    grayLine: '#dcdde0',
    border: '#d7d8da',
    textHighlight: '#b3b9ff',
    title: '#2e384d',
    red: '#e83f5b',
    green: '#4cd62b',
    blue: '#5965e0',
    blueDark: '#4953b8',
    blueTwitter: '#2aa9e0',
    buttonTextColor: '#ffffff',
  },
  dark: {
    background: '#000000',
    backgroundColor: '#f2f3f5',
    fontColor: '#666666',
    grayLine: '#dcdde0',
    border: '#d7d8da',
    textHighlight: '#b3b9ff',
    title: '#2e384d',
    red: '#e83f5b',
    green: '#4cd62b',
    blue: '#5965e0',
    blueDark: '#4953b8',
    blueTwitter: '#2aa9e0',
    buttonTextColor: '#ffffff',
  },
  colors: {
    primary: '#0070f3',
  },
};

export type ThemeType = typeof theme;
export default theme;
