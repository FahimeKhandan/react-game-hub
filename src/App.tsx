import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";

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
      <GridItem area={"side"}>
        <GenreList />
      </GridItem>
      <GridItem area={"main"}>
        <GamesGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
