import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// Definimos la animación de rotación
const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

// Estilizamos el contenedor de la animación de carga
const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

// Estilizamos el spinner de carga
const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #36d7b7;
  border-radius: 50%;
  border-top-color: transparent;
  animation: ${spin} 1s linear infinite; // Aplicamos la animación de rotación
`;

const LoadingPage = () => {
  const [loading, setLoading] = useState(true);

  // Simulamos una carga de datos, podrías reemplazar esto con tu lógica real de carga de datos
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulamos una carga de 3 segundos
    return () => clearTimeout(timer);
  }, []);

  return <LoadingContainer>{loading && <LoadingSpinner />}</LoadingContainer>;
};

export default LoadingPage;
