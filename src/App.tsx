import { FC, useContext } from "react";
import "./App.css";

import { HeroGrid } from "./components/HeroGrid";
import { Textfield } from "./components/common/Textfield";
// import { useHeros } from "./hooks/useHeros";
import { useDebounce } from "./hooks/useDebounce";
import { AppContext } from "./state/AppState";

export const App: FC = () => {
  const { debouncedValue: searchValue, setValue: setSearchValue } =
    useDebounce("");

  // const { characters } = useHeros();

  const { characters } = useContext(AppContext);

  return (
    <div className="app py-10 px-8 space-y-4">
      <div className="flex justify-center">
        <Textfield
          placeholder="Search characters"
          onChange={(value) => {
            setSearchValue(value);
            console.log(value);
          }}
        />
      </div>
      <HeroGrid
        characters={characters.filter((character) =>
          character.name.includes(searchValue || "")
        )}
      />
    </div>
  );
};
