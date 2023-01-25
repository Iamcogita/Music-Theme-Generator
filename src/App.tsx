import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { Genre } from "./Utils/Musics";

export type Theme = {
  colors: ColorScheme;
};

interface ColorScheme {
  nav: string;
  footer: string;
  body: string;
}

const theme: Theme = {
  colors: {
    nav: "#884242",
    body: "rgba( 100, 100, 100, 0.25 )",
    footer: "#884242"
  },
};

function App() {
  const [genre, setGenre] = useState<null | Genre>(null);
  const handleGenre = (genre: Genre) => {
    setGenre(genre);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header handleGenre={handleGenre}/>
        <Main handleGenre={genre}/>
        <Footer paragraph="Copyright ©2023 My Website" />
      </ThemeProvider>
    </>
  );
}

export default App;