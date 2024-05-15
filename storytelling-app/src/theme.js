import { createTheme } from '@material-ui/core/styles';

const getTheme = (darkMode) => createTheme({
  palette: {
    type: darkMode ? 'dark' : 'light',  // Confirm this toggles correctly
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
  },
  typography: {
    // Define your typography adjustments here
  },
});

export default getTheme;
