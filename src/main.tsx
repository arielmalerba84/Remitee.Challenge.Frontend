
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ErrorProvider } from "./context/ErrorContext";
import { SuccessProvider } from "./context/SucessContext";
import { ErrorBanner } from "./components/ErrorBanner";
import { SuccessBanner } from "./components/SucessBanner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorProvider>
      <SuccessProvider>
        <ErrorBanner />    {/* Único ErrorBanner global */}
        <SuccessBanner />  {/* Único SuccessBanner global */}
        <App />            {/* Rutas */}
      </SuccessProvider>
    </ErrorProvider>
  </StrictMode>
);
