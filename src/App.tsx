import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { Genre } from "./Utils/Songs";


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
    nav: "#181818",
    body: "rgba( 145, 120, 90, 0.9 ); mix-blend-mode: overlay;",
    footer: "#181818"
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