import React from "react";
import { Game } from "../Hooks/useGames";

interface Props {
  game: Game;
}

const GameCard: React.FC<Props> = ({ game }) => {
  return (
    <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <img
        src={game.background_image}
        alt="Technology acquisitions 2021"
        className="object-cover w-full h-64 mt-4 rounded-lg"
      />
       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {game.name}
      </h5>
      
    </a>
  );
};

export default GameCard;
