import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

const GameCardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box overflow={"hidden"} width={"400px"} borderRadius={"10px"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
