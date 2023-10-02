import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { GenreType } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { PlatformsType } from "./hooks/usePlatforms";
import SortingSelector from "./components/SortingSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: GenreType | null;
  platform: PlatformsType | null;
  sortOrder: string | null;
  searchTerm: string | null;
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
        <Navbar
          onSearchTermSubmit={(searchTerm) =>
            setGameQuery({ ...gameQuery, searchTerm })
          }
        />
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
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack marginBottom={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortingSelector
              selectedOrder={gameQuery.sortOrder ?? ""}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
        </Box>
        <GamesGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
