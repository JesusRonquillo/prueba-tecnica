import styled from "styled-components";
export const BlurImage = styled.img`
  position: absolute;
  left: 0px;
  top: 0px;
  max-width: 100%;
  max-height: 100%;
  @media (max-width: 768px) {
    top: 40%;
    left: 0;
  }
`;
export const BlurImageGreen = styled.img`
  position: absolute;
  right: 0px;
  top: 0px;
  max-width: 100%;
  max-height: 100%;
  @media (max-width: 768px) {
    top: -50%;
    right: 0;
  }
`;
export const HomeImage = styled.img`
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  line-height: 40px;
  color: rgba(3, 5, 15, 1);
  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 36px;
  }
`;
export const Text = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  line-height: 20px;
  letter-spacing: 0.2px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 352px;
  @media (max-width: 768px) {
    width: 100%;
    > span {
      display: none;
    }
    > div > h1 {
      display: none;
    }
  }
`;
export const HeroMobile = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 12px;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const Dropdown = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px 0px 0px 8px;
  gap: 8px;
  padding: 16px;
`;

export const ContainerInputs = styled.div`
  display: flex;
  width: 352px;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const WrapperInput = styled.div`
  position: relative;
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  border-radius: 0px 8px 8px 0px;
  padding: 8px 16px 8px 16px;
`;
export const WrapperCheckbox = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const FormContainer = styled.div`
  padding: 0px 128px;
  display: flex;
  padding: 0px 128px;
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    padding: 0px;
  }
`;
export const LabelCheckbox = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.1px;
`;
export const Badge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 172px;
  height: 24px;
  border-radius: 4px;
  padding: 4px 8px 4px 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.4px;
  background: linear-gradient(86.01deg, #00f4e2 0%, #00ff7f 100%);
  @media (max-width: 768px) {
    font-size: 12px;
    width: 151px;
    height: 20px;
    padding: 2px 8px 2px 8px;
  }
`;
export const Line = styled.div`
  width: 100%;
  border-top: 1px solid rgba(204, 209, 238, 1);
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Button = styled.button<{
  $background?: string;
  $width?: string;
  $fontSize?: string;
  $padding?: string;
  $height?: string;
  $disabledColor?: string; // Nueva propiedad para el color de fondo deshabilitado
}>`
  width: ${({ $width }) => $width || "195px;"};
  height: ${({ $height }) => $height || "auto"};
  border: none;
  background-color: ${({ $background }) => $background || "rgba(3, 5, 15, 1)"};
  padding: ${({ $padding }) => $padding || "20px 40px 20px 40px"};
  gap: 8px;
  color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  font-size: ${({ $fontSize }) => $fontSize || "20px"};
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.4px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;

  // Aplicar estilo para botón deshabilitado
  &:disabled {
    background-color: ${({ $disabledColor }) =>
      $disabledColor || "rgba(200, 200, 200, 0.5)"};
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Link = styled.a`
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: rgba(3, 5, 15, 1);
  text-decoration: underline;
`;
export const Label = styled.label`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: rgba(94, 100, 136, 1);
`;
export const Input = styled.input`
  height: 100%;
  border: none;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  outline: none;
  color: rgba(3, 5, 15, 1);
`;
export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  color: rgba(10, 5, 30, 1);
  border-radius: 4px;
  padding: 2px;
  gap: 10px;
`;
