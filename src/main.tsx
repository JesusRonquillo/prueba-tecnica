import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./redux/store";
// import Oferts from "./pages/Oferts.tsx";
import { Provider } from "react-redux";
import Summary from "./pages/Summary";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Oferts />
       */}
      <Summary />
    </Provider>
  </React.StrictMode>
);
