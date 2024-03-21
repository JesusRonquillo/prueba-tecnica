import styled from "styled-components"

export const FooterContainer = styled.footer`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(3, 5, 15, 1);
  padding: 32px 120px 32px 120px;

  @media (max-width: 768px) {
    padding: 24px;
    flex-direction: column;
    gap: 24px;
    > div {
      width: 100%;
      border-top: 1px solid rgba(43, 48, 78, 1);
    }
  }
`
