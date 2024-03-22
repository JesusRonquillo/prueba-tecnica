import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
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
  Link,
  Badge,
  Button,
  BlurImage,
  BlurImageGreen,
} from "./styles/pages/App";
import { Container, SubContainer } from "./styles/components/Header";
import homeImage from "./assets/images/image.svg";
import arrowDown from "./assets/arrow_down.svg";
import blurAsset from "./assets/blur_asset.svg";

import blurAssetGreen from "./assets/blur_asset_green.svg";
// import iconOther from "./assets/icon-for-other.svg";
// import { Card } from "./components/Target";

function App() {
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
        <SubContainer>
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
                />
              </div>
            </ContainerInputs>
            <ContainerInputs>
              <WrapperCheckbox>
                <Checkbox
                  type="checkbox"
                  name="exampleCheckbox"
                  id="exampleCheckbox"
                />
                <LabelCheckbox>Acepto lo Política de Privacidad</LabelCheckbox>
              </WrapperCheckbox>
              <WrapperCheckbox>
                <Checkbox
                  type="checkbox"
                  name="exampleCheckbox"
                  id="exampleCheckbox"
                />
                <LabelCheckbox>
                  Acepto la Política Comunicaciones Comerciales
                </LabelCheckbox>
              </WrapperCheckbox>
              <Link>Aplican Términos y Condiciones.</Link>
              <Button>Cotiza aquí</Button>
            </ContainerInputs>
          </FormContainer>
        </SubContainer>
      </Container>
      <Footer />
      {/* <CustomText big={true}>hola</CustomText> */}
    </div>
  );
}

export default App;
