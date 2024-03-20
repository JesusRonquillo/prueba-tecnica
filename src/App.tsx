import "./App.css";
import { PrimaryButton } from "./styles/Button";
import { CustomText } from "./styles/Text";

function App() {
	return (
		<>
			<PrimaryButton>Cotiza aquí</PrimaryButton>
			<CustomText big={true}>hola</CustomText>
		</>
	);
}

export default App;
