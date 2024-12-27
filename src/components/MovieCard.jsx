import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div className="relative group cursor-pointer transition-transform transform hover:scale-105">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-96 object-cover rounded-md"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <h2 className="text-lg font-bold">{movie.Title}</h2>
          <p className="text-sm">{movie.Year}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
