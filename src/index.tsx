import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";

import { ThemeProvider } from "@material-ui/core";
import theme from "./themes/theme";

import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <ToastContainer />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
