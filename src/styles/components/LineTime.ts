import styled from "styled-components";

export const TimelineContainer = styled.div`
  display: flex;
  align-items: center;
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
  background-color: ${({ isActive }) => (isActive ? "#4f4fff" : "##7981B2")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: ${({ isActive }) => (isActive ? "#FFF" : "#4f4fff")};
`;
export const Text = styled.div`
  margin-left: 16px; /* Espacio entre el círculo y el texto */
  font-size: 16px;
`;
export const Dashes = styled.div`
  margin-left: 10px; /* Espacio entre el texto y las líneas */
  font-size: 16px;
  display: flex;
  align-items: center;
`;

export const DashLine = styled.div`
  width: 3px;
  height: 2px;
  background-color: #4f4fff;
  margin-right: 5px;
`;
// Estilos para los puntos suspensivos
