import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
  },
  fonts: {
    primary: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
    pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
    quote: 'Georgia, serif',
  },
  fontSizes: {
    'x-small': '1.0rem',
    'small':   '1.2rem',
    'base':    '1.4rem',
    'large':   '1.5rem',
    'title':   '1.7rem',
    'x-large': '2.0rem',
  },
  container: {
    'sm':   '780px',
    'md':   '1024px',
    'lg':   '1200px',
    'x-lg': '1440px',
  },
});