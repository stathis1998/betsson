import { mockData } from "../assets/mock-data";

export function useHeros() {
  const { characters } = mockData;

  return { characters };
}
