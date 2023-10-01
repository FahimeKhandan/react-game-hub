import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { GenreType } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { PlatformsType } from "./hooks/usePlatforms";
import SortingSelector from "./components/SortingSelector";

export interface GameQuery {
  genre: GenreType | null;
  platform: PlatformsType | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
          <GenreList
            selectedGenre={gameQuery.genre}
            onGenreChange={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <HStack paddingLeft={2} marginBottom={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortingSelector />
        </HStack>
        <GamesGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
