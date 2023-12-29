import { FC } from "react";

import { Character } from "../types/characterDto";
import { HeroCard } from "./HeroCard";

export type HeroGridProps = {
  characters?: Character[];
};

export const HeroGrid: FC<HeroGridProps> = (props) => {
  const { characters } = props;

  return (
    <div className="hero-grid text-white">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-1 gap-y-2">
        {characters?.map((character, index) => (
          <HeroCard
            key={character.id}
            character={character}
            isOdd={index % 2 !== 0}
          />
        ))}
      </div>
      {!characters?.length && (
        <div className="text-xl text-center p-10 font-bold">
          No heroes were found!
        </div>
      )}
    </div>
  );
};
