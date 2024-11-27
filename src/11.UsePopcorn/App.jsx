import { useState, useEffect } from "react";
import "./App.css";
import { Loader } from "./components/Loader.jsx";
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
import { useMovies } from "./useMovies.js";
import { useLocalStorageState } from "./useLocalStorageState.js";

export const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const KEY = "ed2a0cca";

export default function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [query, setQuery] = useState("");
  const [watched, setWatched] = useLocalStorageState([], "watched");
  const { movies, isLoading, error } = useMovies(query, handleCloseMovie);

  const handleSelectMovie = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  function handleCloseMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
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
