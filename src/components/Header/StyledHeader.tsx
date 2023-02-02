import Styled, {css} from "styled-components";

export const HeaderContainer = Styled.nav`
    margin: auto;
    display: flex;
    justify-content: center;
    gap: 40px;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 2px;
    height: 140px;
`;

export const StyledButton = Styled.button<{isActive:boolean}>`
    display: flex;
    flex-direction: row;
    padding-top: 40px;
    padding-bottom: 20px;
    color: white;
    background-color: transparent;
    font-size: larger;
    border: none;
    text-decoration-line: thick;
    ${({isActive}) => isActive && css`
        text-decoration: solid underline 6px ;
        text-underline-offset: 14px;
    `}
    :hover {
    cursor: pointer;
        text-decoration: solid underline 2px ;
        text-underline-offset: 10px;
        transform: translateY(-2px);
        transition: all 0.2s ease-in-out;
    }
`;
