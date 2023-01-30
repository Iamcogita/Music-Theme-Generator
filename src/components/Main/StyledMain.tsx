import Styled from "styled-components";

export const ContainerWrapper = Styled.div<{ genre: string }>`
display: flex;
height: 76vh;
flex-direction: column;
justify-content: center;
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
    ? "yellow"
    : props.genre === "rock"
    ? "white"
    : "cyan"};
`;

export const StyledList = Styled.li`
    display: flex;
    font-size: 20px;
    font-weight: bold;
    justify-content: center;
    align-self: center;
    color: black;
`;
