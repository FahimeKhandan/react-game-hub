import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { Text } from "@chakra-ui/react";

interface GamesType {
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
}

interface FetchedGamesResponse {
  count: number;
  results: GamesType[];
}

const GamesGrid = () => {
  const [games, setGames] = useState<GamesType[]>([]);
  const [error, setError] = useState();

  useEffect(() => {
    apiClient
      .get<FetchedGamesResponse>("/games")
      .then(({ data }) => setGames(data.results))
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GamesGrid;
