// import React from "react";
import DashesComteiner from "../components/Dashes";
import { Header } from "../components/Header";
import Timeline from "../components/LineTime";
import SectionInfo from "../sections/Inforation";
// import { SubContainer } from "../styles/components/Header";
import { FlexContainer } from "../styles/components/LineTime";

const Oferts = () => {
  return (
    <>
      <Header />
      <FlexContainer style={{ background: "#EDEFFC" }}>
        <Timeline activeStep={1} text="Planes y coberturas" />
        <DashesComteiner />
        <Timeline activeStep={1} text="Resumen" />
      </FlexContainer>
      <SectionInfo />
    </>
  );
};

export default Oferts;
