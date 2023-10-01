import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImageUrl from "../services/imageUrl";

const GenreList = () => {
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
            <Text fontSize={"large"}>{item.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
