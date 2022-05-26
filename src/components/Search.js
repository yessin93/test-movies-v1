import React from "react";
import StarRating from "./StarRating";

const Search = ({ searchRating, searchValue, handleSearch, handleRating }) => {
  return (
    <div className="header-container">
      <h1>Our movie app</h1>
      <div className="search-container">
        <input
          value={searchValue}
          onChange={handleSearch}
          className="inp"
          type="text"
          placeholder="enter a movie to search"
        />
      </div>
      <StarRating rate={searchRating} handleRating={handleRating} />
    </div>
  );
};

export default Search;
