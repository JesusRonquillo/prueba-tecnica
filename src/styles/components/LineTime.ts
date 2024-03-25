import styled from "styled-components";

export const TimelineContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

// Estilos para los círculos de la línea de tiempo
export const TimelineCircle = styled.div`
  display: flex;
  align-items: center;
`;
export const Circle = styled.div<{ isActive: boolean }>`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ isActive }) =>
    isActive ? "#4f4fff" : "rgb(255,255,255)"};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  border: 2px solid rgba(169, 175, 217, 1);
  color: ${({ isActive }) => (isActive ? "#FFF" : "#4f4fff")};
`;
export const Text = styled.div<{ isActive: boolean }>`
  margin-left: 16px; /* Espacio entre el círculo y el texto */
  font-size: 16px;
  color: ${({ isActive }) => (isActive ? "#141938" : "#7981B2")};
`;
export const Dashes = styled.div`
  margin-left: 15px; /* Espacio entre el texto y las líneas */
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-right: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const DashLine = styled.div`
  width: 3px;
  height: 2px;
  background-color: #4f4fff;
  margin-right: 8px;
`;
// Estilos para los puntos suspensivos

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  @media (max-width: 768px) {
    padding: 0 24px;
    justify-content: flex-start;
  }
`;
