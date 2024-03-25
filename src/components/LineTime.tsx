import {
  Circle,
  Text,
  TimelineCircle,
  TimelineContainer,
  //   TimelineDots,
  //   TimelineLine,
} from "../styles/components/LineTime";
import { TimelineProps } from "../types/style-interfaces";

// Componente de línea de tiempo
const Timeline: React.FC<TimelineProps> = ({ activeStep, text }) => {
  return (
    <TimelineContainer>
      <TimelineCircle>
        <Circle isActive={activeStep === 1}>{activeStep}</Circle>
        <Text isActive={activeStep === 1}>{text}</Text>
      </TimelineCircle>
    </TimelineContainer>
  );
};

export default Timeline;
