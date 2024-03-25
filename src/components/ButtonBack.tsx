import { FC } from "react";
import { Button, Circle, Triangle } from "../styles/components/ButtonBack";

const BackButton: FC<BackButtonProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <Circle>
        <Triangle />
      </Circle>
      <span style={{ color: "#4F4FFF" }}>Volver</span>
    </Button>
  );
};

export default BackButton;
