import { Card } from "../components/Target";
import { CardContainer, Section } from "../styles/sections/Information";
import { CustomText } from "../styles/Text";
import iconMe from "../assets/icon-for-me.svg";
import iconOther from "../assets/icon-for-other.svg";

const SectionInfo = () => {
  return (
    <Section>
      <div style={{ width: "545px" }}>
        <CustomText big>Rocío ¿Para quién deseas cotizar?</CustomText>
      </div>
      <CustomText small>
        Selecciona la opción que se ajuste más a tus necesidades.
      </CustomText>
      <CardContainer>
        <Card
          icon={<img src={iconMe} alt="Icono" />}
          title="Para mí"
          paragraph="Cotiza tu seguro de salud y agrega familiares si asi lo deseas.	"
        />
        <Card
          icon={<img src={iconOther} alt="Icono" />}
          title="Para alguien más"
          paragraph="Realiza una cotización para uno de tus familiares o cualquier persona."
        />
      </CardContainer>
    </Section>
  );
};

export default SectionInfo;
