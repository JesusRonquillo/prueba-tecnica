import React, { useState } from "react";
import {
  CheckIcon,
  Circle,
  Container,
  Header,
} from "../styles/components/Target";

export const Card: React.FC<CardProps> = ({
  backgroundImage,
  icon,
  title,
  paragraph,
}) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <Container style={{ backgroundImage }}>
      {icon && <div>{icon}</div>}
      <Header>
        <div>
          <h2>{title}</h2>
          <p>{paragraph}</p>
        </div>
        <Circle onClick={handleCheck}>{checked && <CheckIcon />}</Circle>
      </Header>
    </Container>
  );
};
