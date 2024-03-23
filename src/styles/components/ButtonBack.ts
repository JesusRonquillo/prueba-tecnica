import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border: none;
  background-color: transparent;
  color: #333;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  border: solid #4f4fff;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`;

export const Triangle = styled.div`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 5px solid #4f4fff;
`;
