// import React from "react";
import { useEffect } from "react";
import DashesComteiner from "../components/Dashes";
import { Header } from "../components/Header";
import Timeline from "../components/LineTime";
import useApi from "../hooks/useApi";
import SectionInfo from "../sections/Inforation";
// import { SubContainer } from "../styles/components/Header";
import { FlexContainer } from "../styles/components/LineTime";
import BackButton from "../components/ButtonBack";

const Oferts = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL + "/api/user.json";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, loading, error, fetchData } = useApi<any>(apiUrl);

  useEffect(() => {
    // Llama a fetchData solo si los datos aún no se han cargado
    if (loading) {
      console.log(apiUrl);
      console.log(data);
      console.log(loading);
      console.log(error);
      fetchData();
    }
  }, [loading]);
  return (
    <>
      <Header />
      <FlexContainer style={{ background: "#EDEFFC" }}>
        <Timeline activeStep={1} text="Planes y coberturas" />
        <DashesComteiner />
        <Timeline activeStep={1} text="Resumen" />
      </FlexContainer>
      <BackButton onClick={() => {}} />
      <SectionInfo />
    </>
  );
};

export default Oferts;
