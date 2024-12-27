// MovieDetail.js (or wherever you display movie info)
import React, { useState } from 'react';

const MovieDetail = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToFavorites = () => {
    // Add logic to add the movie to the favorites list
    setIsFavorite(true);
  };

  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      
      {/* Conditionally render the 'Add to Favorites' button */}
      {!isFavorite && (
        <button onClick={handleAddToFavorites}>Add to Favorites</button>
      )}
      {isFavorite && <p>Added to Favorites!</p>}
    </div>
  );
};

export default MovieDetail;
