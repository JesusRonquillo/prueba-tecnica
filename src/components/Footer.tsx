import logoWhite from "../assets/logo_white.svg";
import { FooterContainer } from "../styles/components/Footer";

export const Footer = () => {
  return (
    <FooterContainer>
      <img src={logoWhite} width={85} alt="Logo" />
      <div></div>
      <span
        style={{
          fontFamily: "BR Sonoma",
          fontSize: "14px",
          lineHeight: "16px",
          fontWeight: 400,
          color: "rgba(248, 249, 255, 1)",
        }}
      >
        © 2023 RIMAC Seguros y Reaseguros.
      </span>
    </FooterContainer>
  );
};
