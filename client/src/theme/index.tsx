import {
  createTheme,
} from '@mui/material';

const theme = createTheme({
  zIndex: {
    appBar: 1201,
  },
  palette: {
    primary: {
      main: '#884dff',
      light: '#aa80ff',
      dark: '#661aff',
    },
    secondary: {
      main: '#4d4dff',
      light: '#8080ff',
      dark: '#1a1aff',
    },
  },
});

export default theme;
