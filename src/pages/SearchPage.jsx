import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';
import { fetchMovies } from '../api';

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('avengers');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchMovieData = async () => {
      const data = await fetchMovies(query, currentPage);
      setMovies(data.Search || []);
    };
    fetchMovieData();
  }, [query, currentPage]);

  return (
    <div className="pt-20 bg-gray-900 text-white min-h-screen ">
      <SearchBar onSearch={(searchQuery) => setQuery(searchQuery)} />
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default SearchPage;
  