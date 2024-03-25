// import React from "react";
// import { useEffect, useState } from "react";
import { useEffect } from "react";
import BackButton from "../components/ButtonBack";
import DashesComteiner from "../components/Dashes";
import { Header } from "../components/Header";
import Timeline from "../components/LineTime";
import SummaryCard from "../components/SummaryCard";
import { useSpring, animated } from "@react-spring/web";
// import useApi from "../hooks/useApi";
import { TimelineMobile } from "../components/TimelineMobile";
import useApi from "../hooks/useApi";
// import { SubContainer } from "../styles/components/Header";
import { FlexContainer } from "../styles/components/LineTime";
import { SummaryContainer } from "../styles/pages/Conteiner";
import { useNavigate } from "react-router-dom";
import LoadingPage from "./Loading";
import { useSelector } from "react-redux";
import { selectUserData, selectSelectedPlan } from "../redux/Selector";
import { RootState } from "../types/style-interfaces";

const Summary = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL + "/api/user.json";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, loading, error, fetchData } = useApi<any>(apiUrl);
  const navigate = useNavigate();
  const userData = useSelector((state: RootState) => selectUserData(state));

  // Usar el selector para obtener el plan seleccionado
  const selectedPlan = useSelector((state: RootState) =>
    selectSelectedPlan(state)
  );
  console.log("Datos del usuario:", userData);
  console.log("Plan seleccionado:", selectedPlan);

  console.log(loading);
  console.log(error);
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (userData.dni === "" || selectedPlan.price === 0) {
      navigate("/");
    }
  }, [userData, selectedPlan, navigate]);
  const handleBack = () => {
    navigate(-1);
  };
  const containerAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

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
          <animated.div style={containerAnimation}>
            <SummaryContainer>
              <BackButton onClick={handleBack} />
              <SummaryCard
                name={data?.name}
                lastName={data?.lastName}
                dni={userData?.dni}
                phone={userData?.phone}
                plan={selectedPlan?.name}
                price={selectedPlan.price}
              />
            </SummaryContainer>
          </animated.div>
        </>
      )}
    </>
  );
};

export default Summary;
