import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from "./App.tsx";
// import LoadingPage from "./pages/Loading.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        {/* <LoadingPage /> */}
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
