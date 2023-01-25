import Styled from "styled-components";

export const HeaderContainer = Styled.nav`
    margin: auto;
    display: flex;
    justify-content: center;
    gap: 40px;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 2px;
    height: 140px;
`;

export const StyledButton = Styled.button`
    display: flex;
    flex-direction: row;
    padding-top: 40px;
    padding-bottom: 20px;
    background-color: transparent;
    color: white;
    font-size: larger;
        border: none;
        text-decoration-line: thick;
        &:active , :focus {
            text-decoration: solid underline 4px ;
            text-underline-offset: 10px;
        }
        &:hover {
            cursor: pointer;
            text-decoration: solid underline 2px ;
            text-underline-offset: 10px;
            transform: translateY(-2px);
            transition: all 0.2s ease-in-out;
        }
`;
