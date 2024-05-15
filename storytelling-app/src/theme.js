import { createTheme } from '@material-ui/core/styles';

const theme = (darkMode) => createTheme({
  palette: {
    type: darkMode ? 'dark' : 'light',
    primary: {
      main: darkMode ? '#90caf9' : '#1976d2',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
});

export default theme;
