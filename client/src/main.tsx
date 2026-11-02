import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "./components/ui/provider.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Dates from "./views/Dates.tsx";
import Numbers from "./views/Numbers.tsx";
import Time from "./views/Time.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/dates" element={<Dates />} />
          <Route path="/numbers" element={<Numbers />} />
          <Route path="/time" element={<Time />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
