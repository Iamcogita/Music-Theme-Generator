import Styled from "styled-components";

export const ContainerWrapper = Styled.div<{ genre: string }>`
display: flex;
max-height: 100vh ;
min-height: 80vh;
padding-bottom: 4%;
flex-direction: column;
justify-content: flex-start;
align-items: center;
font-family: ${(props) =>
  props.genre === "pop"
    ? "Hachi Maru Pop"
    : props.genre === "punk"
    ? "Gloria Hallelujah"
    : props.genre === "rock"
    ? "sans-serif"
    : "Hanalei Fill"};
background-color: ${(props) =>
  props.genre === "pop"
    ? "pink"
    : props.genre === "punk"
    ? "#dfdba684"
    : props.genre === "rock"
    ? "white"
    : "#26d8f0ab"};
`;

export const StyledList = Styled.li`
    display: flex;
    font-size: 18px;
    font-weight: bold;
    justify-content: center;
    align-self: center;
    color: rgba( 50, 6, 44, 0.8 ); 
    mix-blend-mode: multiply;
`;
