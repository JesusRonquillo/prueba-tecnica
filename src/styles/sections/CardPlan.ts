import styled from "styled-components";

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 32px;
  width: -webkit-fill-available;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: flex-start;
    padding: 0px 0px 0px 24px;
  }
`;
export const CardContainer = styled.div`
  width: 288px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: rgb(255, 255, 255);
  border-radius: 24px;
  padding: 68px 32px 48px 32px;
  box-shadow: 0px 1px 32px 0px rgba(174, 172, 243, 0.35);

  @media (max-width: 768px) {
    padding: 32px 24px 32px 24px;
  }
`;
export const LayoutCarousel = styled.div<{
  $slide: number;
}>`
  display: flex;
  justify-content: center;
  transition: transform 0.5s ease;
  gap: 32px;

  @media (max-width: 768px) {
    justify-content: start;
    transform: translateX(-${(props) => props.$slide * 100}%);
    gap: 0px;
  }
`;
export const Layout = styled.div<{
  $gap?: string;
}>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap || "24px"};
  height: -webkit-fill-available;
`;
export const ContainerButtonsCarousel = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 16px;
  }
`;
export const ButtonSlide = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255);
  border: 2px solid rgba(79, 79, 255, 1);
  color: rgb(94, 100, 136, 1);
  cursor: pointer;
`;
export const LayoutSlide = styled.div`
  flex: 0 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 10px;
  }
`;
export const LayoutHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;
export const CardTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.2px;
  font-weight: 900;
`;
export const CardPrice = styled.span`
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.2px;
  font-weight: 900;
`;

export const Tag = styled.span`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.6px;
  font-weight: 900;
  color: rgba(121, 129, 178, 1);
`;
export const BenefitText = styled.p`
  font-size: 16px;
  margin: 0;
  line-height: 28px;
  letter-spacing: 0.1px;
`;
export const BenefitContainer = styled.div`
  display: flex;
  gap: 8px;
`;
export const Bullet = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: rgba(94, 100, 136, 1);
`;
