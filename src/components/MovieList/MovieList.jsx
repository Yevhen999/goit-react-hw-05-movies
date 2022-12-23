export const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ title, id }) => (
        <li key={id}>
          <p>{title}</p>
        </li>
      ))}
    </ul>
  );
};
