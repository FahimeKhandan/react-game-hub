import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "side main"`,
      }}
    >
      <GridItem area={"nav"} bg="red">
        Nav
      </GridItem>
      <GridItem area={"side"} bg="gold">
        Side
      </GridItem>
      <GridItem area={"main"} bg="gray">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
