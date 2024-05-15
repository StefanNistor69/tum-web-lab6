import { createTheme } from '@material-ui/core/styles';

const getTheme = (darkMode) => createTheme({
  palette: {
    mode: darkMode ? 'dark' : 'light',
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    background: {
      default: darkMode ? '#303030' : '#fafafa',
      paper: darkMode ? '#424242' : '#ffffff',
    },
    text: {
      primary: darkMode ? '#ffffff' : '#000000',
    },
  },
  typography: {
    // Define your typography adjustments here
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            color: darkMode ? '#ffffff' : '#000000',  // Text color
          },
          '& .MuiInputLabel-root': {
            color: darkMode ? '#ffffff' : '#000000',  // Label color
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: darkMode ? '#ffffff' : '#000000',  // Border color
            },
            '&:hover fieldset': {
              borderColor: darkMode ? '#ffffff' : '#000000',  // Border color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: darkMode ? '#ffffff' : '#000000',  // Border color on focus
            },
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: darkMode ? '#ffffff' : '#000000',  // Typography color
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: darkMode ? '#424242' : '#ffffff',  // Card background color
        },
      },
    },
  },
});

export default getTheme;
