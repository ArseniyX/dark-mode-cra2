import React from "react";
import "./styles.css";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import style from "styled-theming";
import useTheme from "./useTheme";
import ToggleMode from "./ToggleMode";
import Button from "./Button";

const getBackground = style("mode", {
  light: "#EEE",
  dark: "#111"
});

const getForeground = style("mode", {
  light: "#111",

  dark: "#EEE"
});

const getFontSize = style("textZoom", {
  normal: "1em",
  magnify: "1.2em"
});

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${getBackground};
    color: ${getForeground};
    font-size: ${getFontSize}
  }
`;

export default function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <div className="App">
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
          <ToggleMode />
          <Button
            variant={"primary"}
            onClick={(e) =>
              theme.setTheme(
                theme.textZoom === "normal"
                  ? { ...theme, textZoom: "magnify" }
                  : { ...theme, textZoom: "normal" }
              )
            }
          >
            Toggle Zoom
          </Button>
        </div>
      </>
    </ThemeProvider>
  );
}
