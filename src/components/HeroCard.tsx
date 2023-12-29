import { FC } from "react";

import { Character } from "../types/characterDto";

export type HeroCardProps = {
  character: Character;
  isOdd?: boolean;
};

export const HeroCard: FC<HeroCardProps> = (props) => {
  const { character, isOdd } = props;

  return (
    <div
      className={`hero-card ${
        isOdd ? "bg-zinc-700" : "bg-zinc-600"
      } rounded font-semibold`}
    >
      <div className="p-2">{character.name}</div>
      <img src={character.image.url} alt={`Photo of hero ${character.name}`} />
    </div>
  );
};
