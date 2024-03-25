import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import {
  HomeImage,
  Title,
  HeroMobile,
  TitleContainer,
  FormContainer,
  ContainerInputs,
  Line,
  Dropdown,
  WrapperInput,
  Text,
  Input,
  Label,
  WrapperCheckbox,
  LabelCheckbox,
  Checkbox,
  Badge,
  Button,
  BlurImage,
  BlurImageGreen,
} from "../styles/pages/App";
import { Container, SubContainer } from "../styles/components/Header";
import homeImage from "../assets/images/image.svg";
import arrowDown from "../assets/arrow_down.svg";
import blurAsset from "../assets/blur_asset.svg";

import blurAssetGreen from "../assets/blur_asset_green.svg";
import { Link } from "react-router-dom";
import { ChangeEvent, useState } from "react";
export const Home = () => {
  const [documentNumber, setDocumentNumber] = useState("");
  const [isQuoteDisabled, setIsQuoteDisabled] = useState<boolean>(true);
  const [numberPhone, setNumberPhone] = useState("");

  const handleDocumentNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    // Limitar la longitud del número de documento a 9 caracteres
    if (value.length <= 8) {
      setDocumentNumber(value);
    }
    handleCotizarClick();
  };
  const handleCotizarClick = () => {
    // Verificar que el número de documento esté lleno antes de avanzar
    if (documentNumber.length >= 7) {
      setIsQuoteDisabled(false);
    } else {
      setIsQuoteDisabled(true);
    }
  };
  const handleNumberPhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    // Limitar la longitud del número de documento a 9 caracteres
    if (value.length <= 9) {
      setNumberPhone(value);
    }
    handleCotizarClick();
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario si es necesario
  };

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <BlurImage src={blurAsset} alt="Blur Image Background" />
      <BlurImageGreen src={blurAssetGreen} alt="Blur Image Background" />
      <Header />

      <Container>
        <form onSubmit={handleSubmit}>
          <SubContainer style={{ display: "flex" }}>
            <HomeImage src={homeImage} alt="Home Image" />
            <HeroMobile>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <Badge>Seguro Salud Flexible</Badge>
                <TitleContainer>
                  <Title>Creado para ti y tu familia</Title>
                </TitleContainer>
              </div>
              <img
                style={{
                  zIndex: 999,
                }}
                width={"132px"}
                src={homeImage}
                alt="Home Image"
              />
            </HeroMobile>
            <Line></Line>
            <FormContainer>
              <TitleContainer>
                <Badge>Seguro Salud Flexible</Badge>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <Title>Creado para ti y tu familia</Title>
                  <Text>
                    Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                    nuestra asesoría. 100% online.
                  </Text>
                </div>
              </TitleContainer>
              <ContainerInputs>
                <div
                  style={{
                    display: "flex",
                    borderRadius: "8px",
                    border: "1px solid rgba(94, 100, 136, 1)",
                  }}
                >
                  <Dropdown>
                    <span>DNI</span>
                    <img width={20} height={20} src={arrowDown} alt="" />
                  </Dropdown>
                  <WrapperInput>
                    <Label htmlFor="id">Nro. de documento</Label>
                    <Input
                      id="id"
                      name="id"
                      placeholder="30216147"
                      style={{}}
                      type="number"
                      value={documentNumber}
                      onChange={handleDocumentNumberChange}
                      required
                    />
                  </WrapperInput>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "8px",
                    border: "1px solid rgba(94, 100, 136, 1)",
                    padding: "8px 16px 8px 16px",
                  }}
                >
                  <Label htmlFor="phone">Celular</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="5130216147"
                    type="number"
                    value={numberPhone}
                    onChange={handleNumberPhoneChange}
                    required
                  />
                </div>
              </ContainerInputs>
              <ContainerInputs>
                <WrapperCheckbox>
                  <Checkbox
                    type="checkbox"
                    name="exampleCheckbox"
                    id="exampleCheckbox"
                    required
                  />
                  <LabelCheckbox>
                    Acepto lo Política de Privacidad
                  </LabelCheckbox>
                </WrapperCheckbox>
                <WrapperCheckbox>
                  <Checkbox
                    type="checkbox"
                    name="exampleCheckbox"
                    id="exampleCheckbox"
                    required
                  />
                  <LabelCheckbox>
                    Acepto la Política Comunicaciones Comerciales
                  </LabelCheckbox>
                </WrapperCheckbox>
                <Link to="/">Aplican Términos y Condiciones.</Link>
                <Link to="/oferts-user">
                  <Button
                    onClick={handleCotizarClick}
                    disabled={isQuoteDisabled}
                    type="submit"
                  >
                    Cotiza aquí
                  </Button>
                </Link>
              </ContainerInputs>
            </FormContainer>
          </SubContainer>
        </form>
      </Container>
      <Footer />
      {/* <CustomText big={true}>hola</CustomText> */}
    </div>
  );
};
