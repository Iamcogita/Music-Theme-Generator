import { FooterContainer } from "./StyledFooter";

interface FooterProps {
  paragraph: string;
}

const Footer = ({ paragraph }: FooterProps) => {
  return (
    <FooterContainer>
      <p>{paragraph}</p>
    </FooterContainer>
  );
};

export default Footer;
