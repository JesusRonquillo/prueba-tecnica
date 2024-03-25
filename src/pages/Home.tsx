import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import {
  HomeImage,
  Line,
  BlurImage,
  BlurImageGreen,
} from "../styles/pages/App";
import { Container, SubContainer } from "../styles/components/Header";
import homeImage from "../assets/images/image.svg";
import blurAsset from "../assets/blur_asset.svg";

import blurAssetGreen from "../assets/blur_asset_green.svg";
import { ChangeEvent, useEffect, useState } from "react";
import HeaderForm from "../components/Home/HeaderForm";
import ContainerForm from "../components/Home/ContainerForm";
import { useDispatch } from "react-redux";
import { addUserData } from "../redux/userSlice";
import { useSpring, animated } from "@react-spring/web";

export const Home = () => {
  const [documentNumber, setDocumentNumber] = useState("");
  const [isQuoteDisabled, setIsQuoteDisabled] = useState<boolean>(true);
  const [numberPhone, setNumberPhone] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(0);
  const [tradePolicy, setTradePolicy] = useState(0);
  const dispatch = useDispatch();

  const imageAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-100px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  });
  const formAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(+100px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  });
  useEffect(() => {
    if (
      documentNumber.length >= 6 &&
      numberPhone.length >= 7 &&
      privacyPolicy === 1 &&
      tradePolicy === 1
    ) {
      setIsQuoteDisabled(false);
    } else {
      setIsQuoteDisabled(true);
    }
  }, [documentNumber, numberPhone, privacyPolicy, tradePolicy]);

  const handleDocumentNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    // Limitar la longitud del número de documento a 9 caracteres
    if (value.length <= 8) {
      setDocumentNumber(value);
    }
  };

  const handleCotizarClick = () => {
    // Verificar que el número de documento esté lleno antes de avanzar
    dispatch(addUserData({ phone: numberPhone, dni: documentNumber }));
    if (
      documentNumber.length >= 6 &&
      numberPhone.length >= 7 &&
      privacyPolicy === 1 &&
      tradePolicy === 1
    ) {
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
  };

  const handlePrivacyPolicyChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setPrivacyPolicy(checked ? 1 : 0);
  };

  const handleTradePolicyChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setTradePolicy(checked ? 1 : 0);
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
            <animated.div style={imageAnimation}>
              <HomeImage src={homeImage} alt="Home Image" loading="lazy" />
            </animated.div>
            <animated.div style={formAnimation}>
              <HeaderForm />
              <Line></Line>
              <ContainerForm
                documentNumber={documentNumber}
                numberPhone={numberPhone}
                privacyPolicy={privacyPolicy}
                tradePolicy={tradePolicy}
                isQuoteDisabled={isQuoteDisabled}
                handleDocumentNumberChange={handleDocumentNumberChange}
                handleNumberPhoneChange={handleNumberPhoneChange}
                handlePrivacyPolicyChange={handlePrivacyPolicyChange}
                handleTradePolicyChange={handleTradePolicyChange}
                handleCotizarClick={handleCotizarClick}
              />
            </animated.div>
          </SubContainer>
        </form>
      </Container>
      <Footer />
      {/* <CustomText big={true}>hola</CustomText> */}
    </div>
  );
};
