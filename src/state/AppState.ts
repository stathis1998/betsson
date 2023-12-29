import { createContext } from "react";

import { AppState } from "../types/characterDto";

export const AppContext = createContext<AppState>({
  characters: [],
});
