import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { GenreType } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { PlatformsType } from "./hooks/usePlatforms";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<GenreType | null>(null);
  const [selectedPlatform, setSelectedPlatform] =
    useState<PlatformsType | null>(null);

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
            selectedGenre={selectedGenre}
            onGenreChange={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <PlatformSelector
          selectedPlatfor={selectedPlatform}
          onSelectPlatform={(selectedPlatform) =>
            setSelectedPlatform(selectedPlatform)
          }
        />
        <GamesGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
