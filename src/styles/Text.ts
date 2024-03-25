import styled from "styled-components";
import { TextProps } from "../types/style-interfaces";

export const CustomText = styled.span<TextProps>`
  font-size: ${({ big, small }) =>
    big
      ? "40px"
      : small
      ? "16px"
      : "14px"}; // Tamaño de fuente basado en las props
  font-weight: ${({ big }) =>
    big ? "bold" : "normal"}; // Peso de la fuente para texto grande
  background-color: ${({ background }) =>
    background ||
    "transparent"}; // Color de fondo, predeterminado a transparente si no se proporciona
  color: ${({ color }) =>
    color ||
    "#03050F"}; // Color del texto, predeterminado a negro si no se proporciona
  padding: 10px; // Padding para espacio alrededor del texto
  display: inline-block; // Hace que el componente se comporte como un elemento en línea para que el color de fondo se aplique correctamente
  text-align: center;
`;
