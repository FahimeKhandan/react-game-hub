import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GamesGrid from "./components/GamesGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "side main"`,
      }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <GridItem  area={"side"}>
        Side
      </GridItem>
      <GridItem area={"main"}>
        <GamesGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;
