import React from "react";
import StarRating from "./StarRating";

const MovieCard = ({ film }) => {
  return (
    <div className="movie-card">
      <StarRating rate={film.rating} />
      <img src={film.image} alt={film.name} />
      <h3> {film.name} </h3>
      <p> {film.date} </p>
    </div>
  );
};

export default MovieCard;
