// import React from "react";
import { useEffect, useState } from "react";
import DashesComteiner from "../components/Dashes";
import { Header } from "../components/Header";
import Timeline from "../components/LineTime";
import useApi from "../hooks/useApi";
import SectionInfo from "../sections/Inforation";
import { TimelineMobile } from "../components/TimelineMobile";
// import { SubContainer } from "../styles/components/Header";
import { FlexContainer } from "../styles/components/LineTime";
import BackButton from "../components/ButtonBack";
import { Plans } from "../sections/Plans";
import { Container } from "../styles/pages/Conteiner";

const Oferts = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL + "/api/user.json";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, loading, error, fetchData } = useApi<any>(apiUrl);
  const [showPlans, setShowPlans] = useState(false);

  console.log(data);
  console.log(loading);
  console.log(error);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleCardClick = () => {
    setShowPlans(true); // Mostrar los planes cuando se hace clic en una tarjeta
  };
  return (
    <>
      <Header />
      <FlexContainer style={{ background: "#EDEFFC" }}>
        <Timeline activeStep={1} text="Planes y coberturas" />
        <DashesComteiner />
        <Timeline activeStep={1} text="Resumen" />
        <TimelineMobile></TimelineMobile>
      </FlexContainer>
      <Container>
        <BackButton onClick={() => {}} />
        <SectionInfo name={data?.name} onCardClick={handleCardClick} />{" "}
        {showPlans && <Plans />}
      </Container>
    </>
  );
};

export default Oferts;
