import {
  Card,
  CardBody,
  Heading,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import React from "react";

const GameCardSkeleton = () => {
  return (
    <Card minHeight={"300px"}>
      <Heading>
        <Skeleton />
      </Heading>
      <CardBody>
        <SkeletonText />
      </CardBody>{" "}
    </Card>
  );
};

export default GameCardSkeleton;
