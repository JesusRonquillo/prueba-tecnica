import styled from "styled-components";

export const TimeLineContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const StepText = styled.div`
  font-size: 10px;
  font-weight: 900;
  line-height: 16px;
  letter-spacing: 0.8px;
  color: rgba(20, 25, 56, 1);
`;

export const TimeLine = styled.div`
  width: 210px;
  height: 6px;
  border-radius: 20px;
  background-color: rgba(169, 175, 217, 1);
`;
