import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { data } = useGenre();

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
