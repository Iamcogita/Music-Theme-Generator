import { FooterContainer } from "./StyledFooter";

interface FooterProps {
  paragraph: string;
}

const Footer = ({ paragraph }: FooterProps) => {
  return (
    <>
      <FooterContainer>
        {paragraph} <img src="andro-logo192.png" height={"20px"} alt={"logo"} /> 
      </FooterContainer>
    </>
  );
};

export default Footer;