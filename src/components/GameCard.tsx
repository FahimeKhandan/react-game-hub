import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { GamesType } from "../hooks/useGame";

const GameCard = ({ game }: { game: GamesType }) => {
  return (
    <Card overflow={"hidden"}>
      <Image src={game.background_image}/>
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
