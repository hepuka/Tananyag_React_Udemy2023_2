import { useState, useEffect } from "react";
import { KEY } from "./App";
import { Box } from "./components/Box";
import { ErrorMessage } from "./components/ErrorMessage";
import { Loader } from "./components/Loader";
import { Main } from "./components/Main";
import { MovieList } from "./components/MovieList";
import { NavBar } from "./components/NavBar";
import { NumResults } from "./components/NumResults";
import { Search } from "./components/Search";
import { WatchedMoviesList } from "./components/WatchedMoviesList";
import { WatchedSummary } from "./components/WatchedSummary";
import { tempWatchedData } from "./data/tempWatchedData";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");

        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );

        if (!response.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await response.json();
        if (data.Response === "False") throw new Error("Movie not found");
        setMovies(data.Search);
      } catch (e) {
        setError(e.messages);
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    fetchMovies();
  }, [query]);

  const handleSelectMovie = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  function MovieDetails({ selectedId, onCloseMovie, onAddWatched, watched }) {}

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onselectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails selectedId={selectedId} watched={watched} />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList watched={watched} />
            </>
          )}
        </Box>
      </Main>
      {/*<StarRating
              maxRating={5}
              messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
            />
            <StarRating
              maxRating={10}
              size={24}
              color="red"
              className="test"
              defaultRating={2}
            /> */}
    </>
  );
}
