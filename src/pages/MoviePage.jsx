import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../api';

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await getMovieDetails(id);
      setMovie(data);
    };
    fetchDetails();
  }, [id]);

  if (!movie) return <p className="text-center text-white">Loading...</p>;

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8 sm:w-max  ">
      <div className="container mx-auto mt-20">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-72 h-auto rounded-lg"
          />
          <div>
            <h1 className="text-4xl font-bold mb-4">{movie.Title}</h1>
            <p className="mb-4">{movie.Plot}</p>
            <p className="mb-2">
              <strong>Genre:</strong> {movie.Genre}
            </p>
            <p className="mb-2">
              <strong>Released:</strong> {movie.Released}
            </p>
            <p className="mb-2">
              <strong>IMDB Rating:</strong> {movie.imdbRating}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
