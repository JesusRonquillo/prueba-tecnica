// import React from "react";
import { useEffect } from "react";
import DashesComteiner from "../components/Dashes";
import { Header } from "../components/Header";
import Timeline from "../components/LineTime";
import useApi from "../hooks/useApi";
import SectionInfo from "../sections/Inforation";
import { TimelineMobile } from "../components/TimelineMobile";
// import { SubContainer } from "../styles/components/Header";
import { FlexContainer } from "../styles/components/LineTime";
import BackButton from "../components/ButtonBack";
// import { Plans } from "../sections/Plans";
import { Container } from "../styles/pages/Conteiner";
import { Link } from "react-router-dom";
import LoadingPage from "./Loading";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { PlansData, UserData } from "../types/style-interfaces";

const Oferts = () => {
  const apiUrlUser = import.meta.env.VITE_API_BASE_URL + "/api/user.json";
  const apiUrlPlans = import.meta.env.VITE_API_BASE_URL + "/api/plans.json";
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {
    data: userData,
    loading: userLoading,
    error: userError,
    fetchData: fetchUserData,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } = useApi<UserData>(apiUrlUser);
  const {
    data: plansData,
    loading: plansLoading,
    error: plansError,
    fetchData: fetchPlansData,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } = useApi<PlansData>(apiUrlPlans);

  useEffect(() => {
    fetchUserData();
    fetchPlansData();
    console.log(userError);
    console.log(plansError);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!userLoading && userData) {
      // Despacha la acción addUser con los datos del usuario
      dispatch(addUser(userData));
    }
  }, [userData, userLoading, dispatch]);

  return (
    <>
      {userLoading && plansLoading === true ? (
        <LoadingPage />
      ) : (
        <>
          <Header />
          <FlexContainer style={{ background: "#EDEFFC" }}>
            <Timeline activeStep={1} text="Planes y coberturas" />
            <DashesComteiner />
            <Timeline activeStep={2} text="Resumen" />
            <TimelineMobile></TimelineMobile>
          </FlexContainer>
          <Container>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <BackButton onClick={() => window.history.back()} />
            </Link>
            <SectionInfo
              name={userData?.name || ""}
              dataPlans={plansData?.list || []}
            />
          </Container>
        </>
      )}
    </>
  );
};

export default Oferts;
