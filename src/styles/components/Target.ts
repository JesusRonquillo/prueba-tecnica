import styled from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";

export const Container = styled.div`
  position: relative;
  border-radius: 24px;
  background-color: #ffffff;
  box-shadow: 0px 1px 32px #aeacf3; /* Ajuste de la sombra */
  padding: 20px;
  width: 256px;
  height: 212px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Circle = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  border: 2px solid #000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CheckIcon = styled(AiOutlineCheck)`
  font-size: 16px;
  color: #000;
`;
