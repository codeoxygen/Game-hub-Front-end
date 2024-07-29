import React from "react"
import useGames from "../Hooks/useGames";
import GameCard from "./Gamecard";

interface Game {
  id: string;
  name: string;
}

interface results {
  results: Game[];
}

const GameGrid = () => {
  const {games, error} = useGames()

  return (
    <>

    {error && <p>{error}</p>}

    <div className="grid gap-10 p-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
    {games.map((game) => (
      <GameCard key={game.id} game={game} />
    ))}
  </div>

    </>
  );
};

export default GameGrid;
