import React, { useState } from "react";
import { Card } from "../components/Target";
import {
  CardContainer,
  Section,
  TitleContainer,
} from "../styles/sections/Information";
import iconMe from "../assets/icon-for-me.svg";
import iconOther from "../assets/icon-for-other.svg";
import { Title, Text } from "../styles/sections/Information";
import { Plans } from "./Plans";
import { useSpring, animated } from "@react-spring/web";
import { SectionInfoProps } from "../types/style-interfaces";

const SectionInfo: React.FC<SectionInfoProps> = ({ name, dataPlans }) => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleCardClick = (title: string) => {
    setActiveCard(title === activeCard ? null : title);
  };
  const sectionAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  // Animación para cada tarjeta (Card)
  const cardAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500, delay: 200 },
  });

  // Animación para los textos de los planes (Plans)
  const plansAnimation = useSpring({
    opacity: activeCard ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 500 },
  });
  return (
    <animated.div style={sectionAnimation}>
      <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
        <Section>
          <TitleContainer>
            <Title>{`${name} ¿Para quién deseas cotizar?`}</Title>
            <Text>
              Selecciona la opción que se ajuste más a tus necesidades.
            </Text>
          </TitleContainer>
          <CardContainer>
            <animated.div style={cardAnimation}>
              <Card
                onClick={() => handleCardClick("Para mí")}
                icon={<img src={iconMe} alt="Icono" />}
                title="Para mí"
                paragraph="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
                isActive={activeCard === "Para mí"}
              />
            </animated.div>
            <animated.div style={cardAnimation}>
              <Card
                onClick={() => handleCardClick("Para alguien más")}
                icon={<img src={iconOther} alt="Icono" />}
                title="Para alguien más"
                paragraph="Realiza una cotización para uno de tus familiares o cualquier persona."
                isActive={activeCard === "Para alguien más"}
              />
            </animated.div>
          </CardContainer>
        </Section>
        <animated.div style={plansAnimation}>
          {activeCard && (
            <Plans data={dataPlans} plan={activeCard === "Para mí" ? 1 : 2} />
          )}
        </animated.div>
      </div>
    </animated.div>
  );
};

export default SectionInfo;
