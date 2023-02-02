import { StyledButton, HeaderContainer } from "./StyledHeader";
import { hiphop, punk, rock, pop, Song } from "../../Utils/Songs";

const Header = (props: { setGenre: Song[] | any , activeGenre: Song[] }) => {
  const { setGenre } = props;
  const { activeGenre} = props;

  return (
    <HeaderContainer>
        <StyledButton isActive={activeGenre === pop} onClick={() => setGenre(pop)}>Pop</StyledButton>
        <StyledButton isActive={activeGenre === rock} onClick={() => setGenre(rock)}>Rock</StyledButton>
        <StyledButton isActive={activeGenre === punk} onClick={() => setGenre(punk)}>Punk</StyledButton>
        <StyledButton isActive={activeGenre === hiphop} onClick={() => setGenre(hiphop)}>HipHop</StyledButton>
    </HeaderContainer>
  );
};

export default Header;
