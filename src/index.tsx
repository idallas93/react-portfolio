import ReactDOM from "react-dom";
import * as React from "react"
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { deepPurple, grey, lightBlue } from "@mui/material/colors";

// const theme = createTheme({
//     palette: {
//       mode: "dark",
//       primary: {
//         main: lightBlue[700]
//       },
//       secondary: {
//         main: deepPurple[900]
//       },
//       text: {
//         primary: grey[50],
//         secondary: grey[100]
//       },
//       tonalOffset: 0.2
//     },
//     components: {
//       MuiButton: {
//         defaultProps: {
//           variant: "contained",
//           style: {
//             transition: "background-color 0.5s ease-in"
//           }
//         }
//       },
//       MuiButtonGroup: {
//         defaultProps: {
//           variant: "contained"
//         }
//       },
//       MuiTypography: {
//         defaultProps: {
//           style: {
//             textAlign: "center"
//           }
//         }
//       }
//     },
//     typography: {
//       fontFamily: "sans-serif",
//       h2: {
//         fontWeight: 800
//       }
//     }
//   });
const theme = createTheme()
  const rootElement = document.getElementById("root")

ReactDOM.render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>,
    rootElement
  );
