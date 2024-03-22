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
  onClick,
  isActive,
}) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
    if (onClick) onClick(); // Ejecuta la función onClick si está definida
  };

  return (
    <Container border={isActive ? "solid" : ""} style={{ backgroundImage }}>
      <div onClick={handleCheck}>
        {icon && <div>{icon}</div>}
        <Header>
          <div>
            <h2>{title}</h2>
            <p>{paragraph}</p>
          </div>
          <Circle
            backgroundColor={isActive ? "green" : "initial"}
            onClick={(e) => {
              e.stopPropagation(); // Evita la propagación del clic al contenedor de la tarjeta
              handleCheck(); // Activa la lógica de selección del círculo
            }}
          >
            {isActive && <CheckIcon />}
          </Circle>
        </Header>
      </div>
    </Container>
  );
};
