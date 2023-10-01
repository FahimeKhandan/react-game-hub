import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GenreType } from "../hooks/useGenre";
import { PlatformsType } from "../hooks/usePlatforms";
import { GameQuery } from "../App";

interface Props {
  gameQuery:GameQuery
}

const GamesGrid = ({ gameQuery}: Props) => {
  const { data, error, isLoading } = useGame(gameQuery);
  
  const skeleton = [1, 2, 3, 4, 5, 6];
  
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        padding={"10px"}
        spacing={5}
      >
        {isLoading &&
          skeleton.map((item, index) => (
            <GameCardContainer key={item + index}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((item, index) => (
          <GameCardContainer key={item.id + index}>
            <GameCard game={item} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
