import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface GamesType {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  parent_platforms: [{ platform: Platform }];
}

interface FetchedGamesResponse {
  count: number;
  results: GamesType[];
}

const useGame = () => {
  const [games, setGames] = useState<GamesType[]>([]);
  const [error, setError] = useState();
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setisLoading(true);

    apiClient
      .get<FetchedGamesResponse>("/games", { signal: controller.signal })
      .then(({ data }) => {
        setGames(data.results);
        setisLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setisLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGame;
