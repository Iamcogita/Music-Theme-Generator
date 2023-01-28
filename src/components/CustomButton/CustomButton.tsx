import Styled, { keyframes } from "styled-components";

const shakeAnimation = keyframes`
    0% {
    transform: rotate(0deg);
    }
    40% {
    transform: rotate(-5deg);
    }
     80%{
    transform: rotate(5deg);
    }
     100% {
    transform: rotate(0deg);
    }
`;

export const CustomButton = Styled.button`
    display: flex;
    margin-top: 40px;
    display: block;
    align-self: center;
    width: 200px;
    height: 80px;
    border-radius: 10px;
    border: #5f5f5f 3px;
    box-shadow: #5f5f5f 0px 2px 5px;
    cursor: help;
    font-size: larger;
    font-weight: bolder;
    z-index:1;
    :hover{
        animation-name: ${shakeAnimation};
        animation-duration: 0.2s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in;
    }
`;
