import {
  Circle,
  Dashes,
  DashLine,
  Text,
  TimelineCircle,
  TimelineContainer,
  //   TimelineDots,
  //   TimelineLine,
} from "../styles/components/LineTime";

// Componente de línea de tiempo
const Timeline: React.FC<TimelineProps> = ({ activeStep }) => {
  return (
    <TimelineContainer>
      <TimelineCircle>
        <Circle isActive={activeStep === 1}>1</Circle>
        <Text>Texto 1</Text>
        <Dashes>
          <DashLine />
          <DashLine />
          <DashLine />
          <DashLine />
        </Dashes>
      </TimelineCircle>
    </TimelineContainer>
  );
};

export default Timeline;
