import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Oferts from "./pages/Oferts";
import Summary from "./pages/Summary";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oferts-user" element={<Oferts />} />
        <Route path="/oferts-user/summary-user" element={<Summary />} />
      </Routes>
    </div>
  );
};

export default App;
