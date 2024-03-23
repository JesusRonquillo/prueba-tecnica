import styled from "styled-components";

export const SummaryCardContainer = styled.div`
  border-radius: 24px;
  background-color: #ffffff;
  box-shadow: 0px 1px 24px #aeacf340; /* Ajuste de la sombra */
  padding: 20px;
  @media (max-width: 760px) {
    width: fit-content;
    height: fit-content;
    padding: 16px 24px 40px 24px;
  }
`;
export const Line = styled.div`
  width: 864px;
  height: 1px;
  background-color: #d7dbf5;
  margin-top: 12px; /* Espacio entre la línea y el texto */
`;
