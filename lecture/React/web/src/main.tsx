// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// import TSApp from "./TSApp.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <App />
  // <TSApp title="заголовок" text="Привет реат" />
  // </StrictMode>,
);
