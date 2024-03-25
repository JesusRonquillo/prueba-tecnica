import React, { useEffect, useState } from "react";
import { Button } from "../styles/pages/App";
import {
  BenefitContainer,
  ButtonSlide,
  BenefitText,
  CardTitle,
  CardContainer,
  ContainerButtonsCarousel,
  Layout,
  CardPrice,
  Tag,
  LayoutHeader,
  LayoutSlide,
  LayoutCarousel,
} from "../styles/sections/CardPlan";
import houseIcon from "../assets/house.svg";
import hospitalIcon from "../assets/hospitalIcon.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addSelectedPlan } from "../redux/userSlice.ts";

export const Plans: React.FC<{
  data: Array<{
    name: string;
    price: number;
    description: string[];
    age: number;
  }>;
  plan: number;
}> = ({ data, plan }) => {
  const dispatch = useDispatch();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState<number | null>(
    null
  );
  const [dataForMe, setDataForMe] = useState<
    Array<{
      name: string;
      price: number;
      description: string[];
      age: number;
    }>
  >([]);
  const [dataForYou, setDataForYou] = useState<
    Array<{
      name: string;
      price: number;
      description: string[];
      age: number;
    }>
  >([]);

  useEffect(() => {
    if (data.length >= 3) {
      setDataForMe(data.slice(0, 3));
      setDataForYou(data.slice(3, data.length));
    } else {
      setDataForMe(data);
      setDataForYou([]);
    }
  }, [data]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide ===
      (plan === 1 ? dataForMe.length : plan === 2 ? dataForYou.length : 0) - 1
        ? 0
        : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide ===
      (plan === 1 ? dataForMe.length : plan === 2 ? dataForYou.length : 0) - 1
        ? 0
        : prevSlide - 1
    );
  };

  const handleSelectPlan = (index: number) => {
    setSelectedPlanIndex(index);
    console.log("Plan seleccionado:", index);
    plan === 1
      ? dispatch(addSelectedPlan(dataForMe[index]))
      : dispatch(addSelectedPlan(dataForYou[index]));
  };

  console.log(selectedPlanIndex);
  console.log(plan);
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <LayoutCarousel $slide={currentSlide}>
        {plan === 1
          ? dataForMe.map((plan, index) => (
              <LayoutSlide key={index}>
                <CardContainer>
                  <Layout>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      {plan?.price > 90 && (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            gap: "4px",
                            height: "20px",
                            fontSize: "12px",
                            width: "fit-content",
                            backgroundColor: "rgba(125, 240, 186, 1)",
                            padding: "2px 8px 2px 8px",
                            borderRadius: "6px",
                          }}
                        >
                          Plan recomendado
                        </div>
                      )}
                      <LayoutHeader>
                        <Layout $gap="24px">
                          <CardTitle>{plan.name}</CardTitle>
                          <Layout $gap="4px">
                            <Tag>COSTO DEL PLAN</Tag>
                            <CardPrice>${plan.price}</CardPrice>
                          </Layout>
                        </Layout>
                        {plan?.price > 90 ? (
                          <img
                            src={hospitalIcon}
                            width={56}
                            height={56}
                            alt=""
                          />
                        ) : (
                          <img src={houseIcon} width={56} height={56} alt="" />
                        )}
                      </LayoutHeader>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        border: "1px solid rgba(215, 219, 245, 1)",
                      }}
                    ></div>
                  </Layout>
                  <Layout $gap="40px">
                    <Layout
                      $gap="24px"
                      style={{
                        height: "-webkit-fill-available",
                      }}
                    >
                      {plan.description.map((description, index) => (
                        <BenefitContainer key={index}>
                          <span>•</span>
                          <BenefitText>{description}</BenefitText>
                        </BenefitContainer>
                      ))}
                    </Layout>
                    <Link to="/oferts-user/summary-user">
                      <Button
                        onClick={() => handleSelectPlan(index)}
                        $background="rgba(255, 28, 68, 1)"
                        $width="100%"
                        $fontSize="18px"
                        $padding="14px 32px 14px 32px"
                        style={{
                          color: "rgb(255,255,255)",
                          textAlign: "center",
                          fontSize: "18px",
                          fontWeight: 700,
                          lineHeight: "20px",
                          letterSpacing: "0.4px",
                        }}
                      >
                        Seleccionar Plan
                      </Button>
                    </Link>
                  </Layout>
                </CardContainer>
              </LayoutSlide>
            ))
          : plan === 2
          ? dataForYou.map((plan, index) => (
              <LayoutSlide key={index}>
                <CardContainer>
                  <Layout>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      {plan?.price > 90 && (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            gap: "4px",
                            height: "20px",
                            fontSize: "12px",
                            width: "fit-content",
                            backgroundColor: "rgba(125, 240, 186, 1)",
                            padding: "2px 8px 2px 8px",
                            borderRadius: "6px",
                          }}
                        >
                          Plan recomendado
                        </div>
                      )}
                      <LayoutHeader>
                        <Layout $gap="24px">
                          <CardTitle>{plan.name}</CardTitle>
                          <Layout $gap="4px">
                            <Tag>COSTO DEL PLAN</Tag>
                            <CardPrice>${plan.price}</CardPrice>
                          </Layout>
                        </Layout>
                        {plan?.price > 90 ? (
                          <img
                            src={hospitalIcon}
                            width={56}
                            height={56}
                            alt=""
                          />
                        ) : (
                          <img src={houseIcon} width={56} height={56} alt="" />
                        )}
                      </LayoutHeader>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        border: "1px solid rgba(215, 219, 245, 1)",
                      }}
                    ></div>
                  </Layout>
                  <Layout $gap="40px">
                    <Layout
                      $gap="24px"
                      style={{
                        height: "-webkit-fill-available",
                      }}
                    >
                      {plan.description.map((description, index) => (
                        <BenefitContainer key={index}>
                          <span>•</span>
                          <BenefitText>{description}</BenefitText>
                        </BenefitContainer>
                      ))}
                    </Layout>
                    <Link to="/oferts-user/summary-user">
                      <Button
                        onClick={() => handleSelectPlan(index)}
                        $background="rgba(255, 28, 68, 1)"
                        $width="100%"
                        $fontSize="18px"
                        $padding="14px 32px 14px 32px"
                        style={{
                          color: "rgb(255,255,255)",
                          textAlign: "center",
                          fontSize: "18px",
                          fontWeight: 700,
                          lineHeight: "20px",
                          letterSpacing: "0.4px",
                        }}
                      >
                        Seleccionar Plan
                      </Button>
                    </Link>
                  </Layout>
                </CardContainer>
              </LayoutSlide>
            ))
          : null}
      </LayoutCarousel>

      <ContainerButtonsCarousel>
        <ButtonSlide onClick={prevSlide}>{"<"}</ButtonSlide>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <span>{currentSlide + 1}</span>/
          <span>{plan === 1 ? dataForMe.length : dataForYou.length}</span>
        </div>
        <ButtonSlide onClick={nextSlide}>{">"}</ButtonSlide>
      </ContainerButtonsCarousel>
    </div>
  );
};
