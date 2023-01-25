import { Container, StyledList } from "./StyledMain";
import { Song } from "./../../Utils/Musics";

const Main = (props: { handleGenre: any }) => {
  const { handleGenre } = props;
  const List = () => {
    return handleGenre !== null ? (
      <h1>
        {props.handleGenre.map((song: Song) => (
          <p>
            <StyledList key={song.name}>
              {song.name} - {song.autor}
            </StyledList>
          </p>
        ))}
      </h1>
    ) : (
      <h1>Choose genre</h1>
    );
  };

  return (
    <>
      <Container>
        <StyledList>{List()}</StyledList>
      </Container>
    </>
  );
};

export default Main;
