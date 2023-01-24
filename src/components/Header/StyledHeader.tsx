import Styled from "styled-components";

export const Container = Styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    gap: 40px;
    font-family: Arial, Helvetica, sans-serif;
    background-color: rgb(56,56,56);
    color:white;
    font-size: large;
    letter-spacing: 2px;
    height: 140px;
    `;
export const StyledList = Styled.ul`
    display: flex;
    flex-direction: row;
    text-decoration: solid underline 3px ;
    text-decoration-line: thick;
    padding-top: 40px;
    padding-bottom: 20px;
    &:active , :focus {
        font-size: larger;
        transform: translateY(-20px);
    }
    &:hover {
        cursor: pointer;
        text-underline-offset: 12px;
        transition: 1s;
    }
`;
