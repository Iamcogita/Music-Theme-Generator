import { ContainerWrapper, StyledList } from "./StyledMain";
import { Song } from "../../Utils/Songs";
import { CustomButton } from "../CustomButton/CustomButton";
import useReloadPage from "../../hooks/useReloadPage";

const Main = (props: { songs: Song[] }) => {
  const { songs } = props;
  const musicGenre = songs[0].genre?.toUpperCase();
  const reload = useReloadPage();

  return (
    <ContainerWrapper genre={songs[0].genre as string}>
      <h1 style={{fontFamily:"fantasy", letterSpacing: "2px" }}> {`${musicGenre} !`}</h1>
      {songs.map((song: Song, index: number) => (
        <StyledList key={index}>
          <p>
            {song.name} - {song.autor}
          </p>
        </StyledList>
      ))}
      <CustomButton onClick={() => reload()}> try me </CustomButton>
    </ContainerWrapper>
  );
};

export default Main;
