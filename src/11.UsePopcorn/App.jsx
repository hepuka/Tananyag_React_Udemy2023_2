import { useState, useEffect } from "react";
import "./App.css";
import { Loader } from "./components/Loader.jsx";
import { tempWatchedData } from "./tempWatchedData.jsx";
import { ErrorMessage } from "./components/ErrorMessage.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { Main } from "./components/Main.jsx";
import { Box } from "./components/Box.jsx";
import { WatchedMoviesList } from "./components//WatchedMoviesList.jsx";
import { WatchedSummary } from "./components/WatchedSummary.jsx";
import { MovieList } from "./components/MovieList.jsx";
import { NumResults } from "./components/NumResults.jsx";
import { Search } from "./components/Search.jsx";

export const average = (arr) =>
  arr.reduce((acc, cur, arr) => acc + cur / arr.length, 0);

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);

        const response = await fetch(
          `http://www.omdbapi.com/?apikey=ed2a0cca&s=inception`
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
    fetchMovies();
  }, []);

  return (
    <>
      <NavBar>
        <Search />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} />}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
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
