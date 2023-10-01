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
    <Card >
      <Heading>
        <Skeleton height={"250px"}/>
      </Heading>
      <CardBody>
        <SkeletonText />
      </CardBody>{" "}
    </Card>
  );
};

export default GameCardSkeleton;
