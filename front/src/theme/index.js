import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidBg: "var(--joy-palette-primary-800)",
        },
      },
    },
  },
});

export default theme;

// Then, pass it to `<CssVarsProvider theme={theme}>`.
