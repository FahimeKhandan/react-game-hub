import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { GamesType } from "../hooks/useGame";
import PlatformIcons from "./PlatformIcons";

const GameCard = ({ game }: { game: GamesType }) => {
  return (
    <Card overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <PlatformIcons
          platforms={game.platforms.map(({ platform }) => platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
