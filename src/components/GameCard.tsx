import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { GamesType } from "../hooks/useGame";
import PlatformIcons from "./PlatformIcons";
import CriticsScore from "./CriticsScore";
import getCroppedImageUrl from "../services/imageUrl";

const GameCard = ({ game }: { game: GamesType }) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIcons
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          />
          <CriticsScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
