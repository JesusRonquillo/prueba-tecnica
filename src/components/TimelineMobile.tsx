import arrowLeftIcon from "../assets/arrow_left.svg";
import { Circle } from "../styles/components/LineTime";
import {
  StepText,
  TimeLine,
  TimeLineContainer,
} from "../styles/components/TimeLineMobile";

export const TimelineMobile = () => {
  return (
    <TimeLineContainer>
      <Circle isActive={false}>
        <img src={arrowLeftIcon} alt="Arrow Left" />
      </Circle>
      <StepText>PASO 1 DE 2</StepText>
      <TimeLine />
    </TimeLineContainer>
  );
};
