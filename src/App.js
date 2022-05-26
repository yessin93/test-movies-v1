import { useState } from "react";
import "./App.css";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";
import Search from "./components/Search";
import { moviesData } from "./data";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchRating, setSearchRating] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  //adding movies to the list
  const handleAdd = (newMovie) => setMovies([...movies, newMovie]);
  // handle rating
  const handleRating = (newRate) => setSearchRating(newRate);
  // handle search
  const handleSearch = (e) => setSearchValue(e.target.value);

  return (
    <div>
      <Search
        searchRating={searchRating}
        searchValue={searchValue}
        handleRating={handleRating}
        handleSearch={handleSearch}
      />
      <MovieList
        movies={movies.filter(
          (movie) =>
            movie.name
              .toLowerCase()
              .includes(searchValue.toLocaleLowerCase().trim()) &&
            movie.rating >= searchRating
        )}
      />
      <AddMovie handleAdd={handleAdd} />
    </div>
  );
}

export default App;
