import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header" "main"`,
        lg: `"header header" "nav main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"header"}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"nav"}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GamesGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
