import React, { useState } from "react";
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

export const Plans = () => {
  const plans = [
    {
      title: "Plan en Casa",
      price: "$39 al mes",
      recommended: false,
      benefits: [
        "Médico general a domicilio por S/20 y medicinas cubiertas al 100%.",
        "Videoconsulta y orientación telefónica al 100% en medicina general + pediatría.",
        "Indemnización de S/300 en caso de hospitalización por más de un día.",
      ],
    },
    {
      title: "Plan en Casa y Clínica",
      price: "$99 al mes",
      recommended: true,
      benefits: [
        "Consultas en clínica para cualquier especialidad.",
        "Medicinas y exámenes derivados cubiertos al 80%",
        "Atención médica en más de 200 clínicas del país.",
      ],
    },
    {
      title: "Plan en Casa + Chequeo ",
      price: "$49 al mes",
      recommended: false,
      benefits: [
        "Un Chequeo preventivo general de manera presencial o virtual.",
        "Acceso a Vacunas en el Programa del MINSA en centros privados. ",
        "Incluye todos los beneficios del Plan en Casa. ",
      ],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === plans.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? plans.length - 1 : prevSlide - 1
    );
  };

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
        {plans.map((plan, index) => (
          <LayoutSlide key={index}>
            <CardContainer>
              <Layout>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {plan.recommended && (
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
                      <CardTitle>{plan.title}</CardTitle>
                      <Layout $gap="4px">
                        <Tag>COSTO DEL PLAN</Tag>
                        <CardPrice>{plan.price}</CardPrice>
                      </Layout>
                    </Layout>
                    <img src={houseIcon} width={56} height={56} alt="" />
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
                  {plan.benefits.map((benefit, index) => (
                    <BenefitContainer key={index}>
                      <span>•</span>
                      <BenefitText>{benefit}</BenefitText>
                    </BenefitContainer>
                  ))}
                </Layout>
                <Button
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
              </Layout>
            </CardContainer>
          </LayoutSlide>
        ))}
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
          <span>{currentSlide + 1}</span>/<span>{plans.length}</span>
        </div>
        <ButtonSlide onClick={nextSlide}>{">"}</ButtonSlide>
      </ContainerButtonsCarousel>
    </div>
  );
};
