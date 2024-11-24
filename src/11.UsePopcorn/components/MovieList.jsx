import { Movie } from "./Movie";

export const MovieList = ({ movies, onselectMovie }) => {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onselectMovie={onselectMovie} />
      ))}
    </ul>
  );
};
