import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 768px) {
    padding: 0px 16px;
  }
`;
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-top: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Section = styled.section`
  width: 645px;
  height: 375px;
  margin: auto; /* Centra horizontalmente */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
  margin-bottom: 50px;
`;
export const TextContainer = styled.div`
  width: 545px;
  margin: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const ContainerCardPlans = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
  overflow-x: hidden;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
