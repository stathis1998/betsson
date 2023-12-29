import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App.tsx";
import "./index.css";

import { AppContext } from "./state/AppState";
import { mockData } from "./assets/mock-data.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppContext.Provider value={{ characters: mockData.characters }}>
      <App />
    </AppContext.Provider>
  </React.StrictMode>
);
