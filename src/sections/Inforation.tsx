import React, { useState } from "react";
import { Card } from "../components/Target";
import { CardContainer, Section } from "../styles/sections/Information";
import { CustomText } from "../styles/Text";
import iconMe from "../assets/icon-for-me.svg";
import iconOther from "../assets/icon-for-other.svg";

const SectionInfo: React.FC<SectionInfoProps> = ({ name }) => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleCardClick = (title: string) => {
    setActiveCard(title === activeCard ? null : title);
  };
  return (
    <Section>
      <div style={{ width: "545px" }}>
        <CustomText big>{`${name} ¿Para quién deseas cotizar?`}</CustomText>
      </div>
      <CustomText small>
        Selecciona la opción que se ajuste más a tus necesidades.
      </CustomText>
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
