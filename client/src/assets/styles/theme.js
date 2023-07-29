import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Set the desired font family
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlinedPrimary: {
          marginRight: 4,
        },
      },
    },
  },
});

export default theme;
