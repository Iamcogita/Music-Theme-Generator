import { StyledButton, HeaderContainer } from "./StyledHeader";
import { hiphop, punk, rock, pop, Song } from "../../Utils/Songs";

const Header = (props: { handleGenre: Song[] | any , activeGenre: Song[] }) => {
  const { handleGenre } = props;
  const { activeGenre} = props;

  return (
    <HeaderContainer>
        <StyledButton isActive={activeGenre === pop} onClick={() => handleGenre(pop)}>Pop</StyledButton>
        <StyledButton isActive={activeGenre === rock} onClick={() => handleGenre(rock)}>Rock</StyledButton>
        <StyledButton isActive={activeGenre === punk} onClick={() => handleGenre(punk)}>Punk</StyledButton>
        <StyledButton isActive={activeGenre === hiphop} onClick={() => handleGenre(hiphop)}>HipHop</StyledButton>
    </HeaderContainer>
  );
};

export default Header;
