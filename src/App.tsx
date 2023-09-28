import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

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
        Side
      </GridItem>
      <GridItem area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
