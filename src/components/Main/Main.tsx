import { ContainerWrapper, StyledList } from "./StyledMain";
import { Song } from "../../Utils/Songs";

const Main = (props: { songs: Song[] }) => {
  const { songs } = props;

  return (
    <ContainerWrapper genre={songs[0].genre as string}>
      {songs.map((song: Song, index: number) => (
          <StyledList key={index}>
            <p>
              {song.name} - {song.autor}
            </p>
          </StyledList>
      ))}
    </ContainerWrapper>
  );
};

export default Main;
