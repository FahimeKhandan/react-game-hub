import { Badge } from "@chakra-ui/react";

const CriticsScore = ({ score }: { score: number }) => {
    const color = score > 8  ?'green' : score > 60 ? 'yellow':'red'
  return (
    <Badge paddingX={2} colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticsScore;
