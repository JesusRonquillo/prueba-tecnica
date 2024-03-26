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
      <button
        onClick={() => window.history.back()}
        style={{
          border: "none",
          background: "none",
          padding: 0,
          margin: 0,
          cursor: "pointer",
        }}
      >
        <Circle isActive={false}>
          <img src={arrowLeftIcon} alt="Arrow Left" />
        </Circle>
      </button>
      <StepText>PASO 1 DE 2</StepText>
      <TimeLine />
    </TimeLineContainer>
  );
};
