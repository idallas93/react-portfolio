import ReactDOM from "react-dom";
import * as React from "react"
import "./index.css";
import App from "./App";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  }

  interface Palette {
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }

  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color'];
    };
  }
}
const theme = createTheme({

  palette: {
    primary: {
      main: "#004369",
      contrastText: "#DB1F48",
      light: "#F2F1EF",
      dark: "#3B3C45"
    },
    neutral: {
      main: '#F2F1EF',
    },
    secondary: {
      main: "#01949A",
      contrastText: "#3D5B59",
      light: "#F4EAE6"
    },
  },
  status: {
    danger: "#DB1F48"
  },
  typography: {
    fontFamily: [
      'Source Sans Pro',
      'sans-serif',
      'BlinkMacSystemFont'
    ].join(','),
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          color: "#564B4F",
          fontFamily: 'BlinkMacSystemFont',
          overflowY: "scroll"
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "#DB1F48",
          fontFamily: 'BlinkMacSystemFont'
        }
      }
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h2',
          h2: 'h2',
          h3: 'h2',
          h4: 'h2',
          h5: 'h2',
          h6: 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
  },
});
const rootElement = document.getElementById("root")

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  rootElement
);
