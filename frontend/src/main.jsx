import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DataContextProvider } from "./Context/ProductDataContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </BrowserRouter>
);
