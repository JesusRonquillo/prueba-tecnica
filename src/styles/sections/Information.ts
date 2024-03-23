import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const TitleContainer = styled.div`
  width: 545px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Section = styled.section`
  width: 645px;
  height: 375px;
  margin: auto; /* Centra horizontalmente */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  align-items: center;
  margin-top: 56px;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    margin: 0;
  }
`;
export const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  margin: 0;
  text-align: center;
  line-height: 48px;
  letter-spacing: -0.6px;

  @media (max-width: 768px) {
    font-size: 16px;
    font-size: 28px;
    font-weight: 700;
    text-align: left;
    color: rgba(20, 25, 56, 1);
    letter-spacing: -0.2px;
    line-height: 36px;
  }
`;
export const Text = styled.p`
  margin: 0;
  color: rgba(20, 25, 56, 1);
  text-align: center;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 28px;
    text-align: left;
    letter-spacing: 0.1px;
    font-weight: 400;
  }
`;
