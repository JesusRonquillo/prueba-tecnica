import styled from "styled-components";
export const HeaderNavigation = styled.header`
  padding: 2px 120px 2px 120px;

  @media (max-width: 760px) {
    padding: 0px 24px 0px 24px;
  }
`;
export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 760px) {
    > img {
      margin: 0px;
    }
  }
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 0px 20px 0px;
  @media (max-width: 760px) {
    > span {
      display: none;
    }
  }
`;
export const WrapperComunication = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  > span {
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 0.4px;
    text-align: right;
  }
`;

export const Container = styled.div`
  padding: 32px 120px;
  @media (max-width: 768px) {
    padding: 0px 24px 64px 24px;
  }
`;
export const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
`;
