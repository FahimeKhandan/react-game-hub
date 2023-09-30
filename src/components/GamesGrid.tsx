import {  SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";

const GamesGrid = () => {
  const { games, error } = useGame();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        padding={"10px"}
        spacing={10}
      >
        {games.map((item) => (
          <GameCard key={item.id} game={item} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
