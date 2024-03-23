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

const SectionInfo: React.FC<SectionInfoProps> = ({ name }) => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleCardClick = (title: string) => {
    setActiveCard(title === activeCard ? null : title);
  };
  return (
    <Section>
      <TitleContainer>
        <Title>{`${name} ¿Para quién deseas cotizar?`}</Title>
        <Text>Selecciona la opción que se ajuste más a tus necesidades.</Text>
      </TitleContainer>
      <CardContainer>
        <Card
          onClick={() => handleCardClick("Para mí")}
          icon={<img src={iconMe} alt="Icono" />}
          title="Para mí"
          paragraph="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
          isActive={activeCard === "Para mí"}
        />
        <Card
          onClick={() => handleCardClick("Para alguien más")}
          icon={<img src={iconOther} alt="Icono" />}
          title="Para alguien más"
          paragraph="Realiza una cotización para uno de tus familiares o cualquier persona."
          isActive={activeCard === "Para alguien más"}
        />
      </CardContainer>
    </Section>
  );
};

export default SectionInfo;
