import {
  Circle,
  Text,
  TimelineCircle,
  TimelineContainer,
  //   TimelineDots,
  //   TimelineLine,
} from "../styles/components/LineTime";

// Componente de línea de tiempo
const Timeline: React.FC<TimelineProps> = ({ activeStep, text }) => {
  return (
    <TimelineContainer>
      <TimelineCircle>
        <Circle isActive={activeStep === 1}>1</Circle>
        <Text>{text}</Text>
      </TimelineCircle>
    </TimelineContainer>
  );
};

export default Timeline;
