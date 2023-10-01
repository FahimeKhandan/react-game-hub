import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenre, { GenreType } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/imageUrl";

interface Props {
  onGenreChange: (genre: GenreType) => void;
}

const GenreList = ({ onGenreChange }: Props) => {
  const { data, isLoading, error } = useGenre();
  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((item) => (
        <ListItem key={item.id} paddingY={1}>
          <HStack>
            <Image
              src={getCroppedImageUrl(item.image_background)}
              boxSize="32px"
              borderRadius={8}
            ></Image>
            <Button
              fontSize={"large"}
              variant="link"
              onClick={() => onGenreChange(item)}
            >
              {item.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
