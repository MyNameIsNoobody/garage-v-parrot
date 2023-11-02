import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidBg: 'var(--joy-palette-primary-800)'
        },
      },
    },
  },
});

export default theme;

// Then, pass it to `<CssVarsProvider theme={theme}>`.
