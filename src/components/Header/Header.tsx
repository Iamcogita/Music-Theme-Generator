import { hiphop, metal, rock, pop} from "../../Utils/Musics";
import { StyledButton, HeaderContainer } from "./StyledHeader";

const Header = (props: { handleGenre: any; }) => {
  const {handleGenre} = props;
  
  return (
    <HeaderContainer>
      <StyledButton onClick={() => handleGenre(pop)}>Pop</StyledButton>
      <StyledButton onClick={() => handleGenre(rock)}>Rock</StyledButton>
      <StyledButton onClick={() => handleGenre(metal)}>Metal</StyledButton>
      <StyledButton onClick={() => handleGenre(hiphop)}>Hip-Hop</StyledButton>
    </HeaderContainer>
  );
};

export default Header;