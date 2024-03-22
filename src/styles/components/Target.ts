import styled from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";

export const Container = styled.div<{ border: string }>`
  position: relative;
  border-radius: 24px;
  cursor: pointer;
  background-color: #ffffff;
  box-shadow: 0px 1px 32px #aeacf3; /* Ajuste de la sombra */
  padding: 20px;
  width: 256px;
  height: 212px;
  border: ${(props) => props.border};
  @media (max-width: 768px) {
    width: auto;
    height: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Circle = styled.div<{ backgroundColor: string }>`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  border: 2px solid #a9afd9;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor};
`;

export const CheckIcon = styled(AiOutlineCheck)`
  font-size: 16px;
  color: white;
`;
