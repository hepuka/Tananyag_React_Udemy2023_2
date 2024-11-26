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
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");

        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );

        if (!response.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await response.json();
        if (data.Response === "False") throw new Error("Movie not found");
        setMovies(data.Search);
        setError("");
      } catch (e) {
        if (e.name !== "AbortError") {
          setError(e.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError("");
    }

    handleCloseMovie();
    fetchMovies();

    //cleanup function
    return function () {
      controller.abort();
    };
  }, [query]);

  const handleSelectMovie = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  function handleCloseMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);

    // localStorage.setItem("watched", JSON.stringify([...watched, movie]));
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
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
              onAddWatched={handleAddWatched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
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
