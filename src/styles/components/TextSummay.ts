import styled from "styled-components";

const TextSummary = styled.p<{
  size: string;
  sizeMobile?: string;
  weight: number;
  lineHeight: string;
  letter: string;
  centerOnMobile?: boolean;
}>`
  font-family: "Lato", sans-serif;
  font-size: ${(props) => props.size};
  letter-spacing: ${(props) => props.letter};
  line-height: ${(props) => props.lineHeight};
  font-weight: ${(props) => props.weight};
  color: #141938;
  @media (max-width: 768px) {
    text-align: ${(props) => (props.centerOnMobile ? "center" : "left")};
    font-size: ${(props) => (props.sizeMobile ? props.sizeMobile : props.size)};
  }
`;

export default TextSummary;
