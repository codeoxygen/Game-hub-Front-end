import {useState, useEffect} from "react";
import apiClient from "../services/api-client";

interface platform {
    id : number;
    name : string ;
    slug : string ;
  }

export interface Game {
  id: string;
  name: string;
  background_image : string;
  parent_platforms : {platform : platform}[]

}

interface fetchGames {
  results: Game[];

}

const useGames = () => {


  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {

    const controller = new AbortController()
    apiClient
      .get<fetchGames>("/games", {
        signal : controller.signal
      })
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

 return {games , error};
};

export default useGames;
