import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#b', // Custom primary color
    },
    secondary: {
      main: '#f50057', // Custom secondary color
    },
    // You can add more custom colors here...
  },
});

export default theme;