import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import { useState } from "react";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GamesGrid = () => {
  const { games, error, isLoading } = useGame();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        padding={"10px"}
        spacing={10}
      >
        {isLoading &&
          [1, 2, 3, 4, 5, 6].map((item) => (
            <GameCardContainer>
              {" "}
              <GameCardSkeleton key={item} />{" "}
            </GameCardContainer>
          ))}
        {games.map((item) => (
          <GameCardContainer>
            <GameCard key={item.id} game={item} />{" "}
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
