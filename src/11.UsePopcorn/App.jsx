import { useState, useEffect } from "react";
import "./App.css";
import { Loader } from "./components/Loader.jsx";
import { tempWatchedData } from "./data/tempWatchedData.jsx";
import { ErrorMessage } from "./components/ErrorMessage.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { Main } from "./components/Main.jsx";
import { Box } from "./components/Box.jsx";
import { WatchedMoviesList } from "./components//WatchedMoviesList.jsx";
import { WatchedSummary } from "./components/WatchedSummary.jsx";
import { MovieList } from "./components/MovieList.jsx";
import { NumResults } from "./components/NumResults.jsx";
import { Search } from "./components/Search.jsx";
import MovieDetails from "./components/MovieDetails.jsx";

export const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const KEY = "ed2a0cca";

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

  function handleCloseMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

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
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              watched={watched}
            />
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
