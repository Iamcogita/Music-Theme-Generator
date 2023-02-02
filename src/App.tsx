import { SetStateAction, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { hiphop, pop, punk, rock, Song } from "./Utils/Songs";

export type Theme = {
  colors: ColorScheme;
};

interface ColorScheme {
  nav: string;
  footer: string;
  body: string;
  font?: string;
}

const theme: Theme = {
  colors: {
    nav: "#181818",
    body: "rgba( 145, 120, 120, 0.8 ); mix-blend-mode: overlay;",
    footer: "#181818",
  },
};

function App() {
  //initial value for state
  const randomGenre = () => {
    let genre = Math.random();
    if (genre > 0.75) return rock;
    if (genre > 0.5) return pop;
    if (genre > 0.25) return punk;
    else return hiphop;
  };

  //this state stores an array of type Song
  const [genre, setGenre] = useState<Song[]>(randomGenre);

  //handle click events
  const handleGenre = (genre: Song) => {
    setGenre(genre as SetStateAction<Song[]>);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header handleGenre={handleGenre} activeGenre={genre} />
        <Main songs={genre} />
        <Footer paragraph={"Copyright ©2023"} />
      </ThemeProvider>
    </>
  );
}

export default App;
