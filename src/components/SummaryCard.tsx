import { Line, SummaryCardContainer } from "../styles/components/SummaryCard";
import TextSummary from "../styles/components/TextSummay";
import iconSumarry from "../assets/icon-summary.svg";

const SummaryCard: React.FC<SummaryCardProps> = ({ name, lastName }) => {
  return (
    <>
      <TextSummary
        size="40px"
        sizeMobile="32px"
        lineHeight="48px"
        weight={700}
        letter="-0.6px"
        centerOnMobile
      >
        Resumen del seguro
      </TextSummary>
      <SummaryCardContainer>
        <TextSummary size="10px" lineHeight="16px" weight={900} letter="0.8px">
          PRECIOS CALCULADOS PARA:
        </TextSummary>
        <div style={{ display: "flex", gap: "12px" }}>
          <img src={iconSumarry} alt="Icon name" />
          <TextSummary
            size="20px"
            lineHeight="28px"
            weight={700}
            letter="-0.2px"
          >
            {name + " " + lastName}
          </TextSummary>
        </div>
        <Line />
        <TextSummary size="16px" lineHeight="24px" weight={700} letter="0.2px">
          Responsable de pago
        </TextSummary>
        <TextSummary size="14px" lineHeight="24px" weight={400} letter="0.1px">
          DNI: 444888888
        </TextSummary>
        <TextSummary size="14px" lineHeight="24px" weight={400} letter="0.1px">
          Celular: 5130216147
        </TextSummary>
        <TextSummary size="16px" lineHeight="24px" weight={700} letter="0.2px">
          Plan elegido
        </TextSummary>
        <TextSummary size="14px" lineHeight="24px" weight={400} letter="0.1px">
          Plan en Casa y Clínica
        </TextSummary>
        <TextSummary size="14px" lineHeight="24px" weight={400} letter="0.1px">
          Costo del Plan: $99 al mes
        </TextSummary>
      </SummaryCardContainer>
    </>
  );
};

export default SummaryCard;
