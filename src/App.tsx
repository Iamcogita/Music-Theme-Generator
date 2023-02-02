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
  font: string;
}

const theme: Theme = {
  colors: {
    font: `${(props: { genre: Song[] }) =>
      props.genre === pop
        ? "pink"
        : props.genre === punk
        ? "yellow"
        : props.genre === rock
        ? "white"
        : "cyan"}`,
    nav: "#181818",
    body: "rgba( 145, 120, 120, 0.5 ) ;mix-blend-mode: overlay;",
    footer: "#181818",
  },
};

function App() {
  const randomGenre = () => {
    let genre = Math.random();
    if (genre > 0.75) return rock;
    if (genre > 0.5) return pop;
    if (genre > 0.25) return punk;
    else return hiphop;
  };

  const [genre, setGenre] = useState<Song[]>(randomGenre);

  const handleGenre = (genre: Song) => {
    setGenre(genre as SetStateAction<Song[]>);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header handleGenre={handleGenre} activeGenre={genre}/>
          <Main songs={genre} />
          <Footer paragraph="Copyright ©2023 My Website" />
      </ThemeProvider>
    </>
  );
}

export default App;
