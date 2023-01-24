import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

export type Theme = {
  colors: ColorScheme;
};

interface ColorScheme {
  header: string;
  body: string;
  footer: string;
  title: string;
}

const theme: Theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
    title: "green",
  },
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Main />
        <Footer paragraph="Copyright ©2023 My Website" />
      </ThemeProvider>
    </>
  );
}

export default App;