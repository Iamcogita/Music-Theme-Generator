import { StyledButton, HeaderContainer } from "./StyledHeader";
import { hiphop, punk, rock, pop} from "../../Utils/Songs";

const Header = (props: { handleGenre: any; }) => {
  const {handleGenre} = props;
  
  return (
    <HeaderContainer>
      <StyledButton onClick={() => handleGenre(pop)}>Pop</StyledButton>
      <StyledButton onClick={() => handleGenre(rock)}>Rock</StyledButton>
      <StyledButton onClick={() => handleGenre(punk)}>Punk</StyledButton>
      <StyledButton onClick={() => handleGenre(hiphop)}>HipHop</StyledButton>
    </HeaderContainer>
  );
};

export default Header;