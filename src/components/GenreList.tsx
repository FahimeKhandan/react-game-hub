import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { genre } = useGenre();

  return (
    <ul>
      {genre.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
