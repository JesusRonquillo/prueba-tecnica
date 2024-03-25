import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from "./App.tsx";
import LoadingPage from "./pages/Loading.tsx";

// eslint-disable-next-line react-refresh/only-export-components
function Root() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Espera 2 segundos (2000 milisegundos)
    return () => clearTimeout(timer);
  }, []);

  return (
    <React.StrictMode>
      <HashRouter>
        <Provider store={store}>{loading ? <LoadingPage /> : <App />}</Provider>
      </HashRouter>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<Root />);
