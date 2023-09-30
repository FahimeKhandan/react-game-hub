import { Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";

const GamesGrid = () => {
  const { games, error } = useGame();

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
