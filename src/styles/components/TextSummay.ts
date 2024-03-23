import styled from "styled-components";

const TextSummary = styled.p<{
  size: string;
  weight: number;
  lineHeight: string;
  letter: string;
}>`
  font-family: "Lato", sans-serif;
  font-size: ${(props) => props.size};
  letter-spacing: ${(props) => props.letter};
  line-height: ${(props) => props.lineHeight};
  font-weight: ${(props) => props.weight};
  color: #141938;
`;

export default TextSummary;
