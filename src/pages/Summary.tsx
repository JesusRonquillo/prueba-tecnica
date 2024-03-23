// import React from "react";
// import { useEffect, useState } from "react";
import BackButton from "../components/ButtonBack";
import DashesComteiner from "../components/Dashes";
import { Header } from "../components/Header";
import Timeline from "../components/LineTime";
import SummaryCard from "../components/SummaryCard";
// import useApi from "../hooks/useApi";
import { TimelineMobile } from "../components/TimelineMobile";
// import { SubContainer } from "../styles/components/Header";
import { FlexContainer } from "../styles/components/LineTime";
import { Container } from "../styles/pages/Conteiner";

const Summary = () => {
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

        <SummaryCard />
      </Container>
    </>
  );
};

export default Summary;
