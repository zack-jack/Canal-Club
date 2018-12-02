import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#3f50b5',
      dark: '#2c387e',
      contrastText: '#fff'
    },
    secondary: {
      main: '#e74c3c',
      dark: '#c0392b',
      contrastText: '#fff'
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: ['"Open Sans"', 'Helvetica', 'Arial', 'sans-serif'].join(',')
  }
});
