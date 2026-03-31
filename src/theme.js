import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiFormControl: {
      defaultProps: {
        variant: 'standard',
      },
    },
    MuiSelect: {
      defaultProps: {
        variant: 'standard',
      },
    },
    MuiInputLabel: {
      defaultProps: {
        variant: 'standard',
      },
    },
  },
});

export default theme;