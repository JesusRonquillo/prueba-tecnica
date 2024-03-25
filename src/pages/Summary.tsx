// import React from "react";
// import { useEffect, useState } from "react";
import { useEffect } from "react";
import BackButton from "../components/ButtonBack";
import DashesComteiner from "../components/Dashes";
import { Header } from "../components/Header";
import Timeline from "../components/LineTime";
import SummaryCard from "../components/SummaryCard";
// import useApi from "../hooks/useApi";
import { TimelineMobile } from "../components/TimelineMobile";
import useApi from "../hooks/useApi";
// import { SubContainer } from "../styles/components/Header";
import { FlexContainer } from "../styles/components/LineTime";
import { Container } from "../styles/pages/Conteiner";
import { useNavigate } from "react-router-dom";
import LoadingPage from "./Loading";

const Summary = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL + "/api/user.json";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, loading, error, fetchData } = useApi<any>(apiUrl);
  const navigate = useNavigate();
  console.log(loading);
  console.log(error);
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      {loading === true ? (
        <LoadingPage />
      ) : (
        <>
          <Header />
          <FlexContainer style={{ background: "#EDEFFC" }}>
            <Timeline activeStep={2} text="Planes y coberturas" />
            <DashesComteiner />
            <Timeline activeStep={1} text="Resumen" />
            <TimelineMobile></TimelineMobile>
          </FlexContainer>
          <Container>
            <BackButton onClick={handleBack} />
            <SummaryCard name={data?.name} lastName={data?.lastName} />
          </Container>
        </>
      )}
    </>
  );
};

export default Summary;
