import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Importar para usar los matchers de Jest DOM

// Componente simple que renderiza un título
const SimpleComponent = () => {
  return <h1>Testing Jest with React</h1>;
};

// Test para asegurarse de que el componente renderiza correctamente
test("renders correctly", () => {
  render(<SimpleComponent />); // Renderizar el componente
  const titleElement = screen.getByText(/Testing Jest with React/i); // Buscar el elemento del título
  expect(titleElement); // Verificar que el título está en el documento
});
