
import { useEffect, useState } from 'react';

const useMovies = () => {
  const [movies, setMovies] = useState(() => {
    const stored = localStorage.getItem('movies');
    return stored ? JSON.parse(stored) : [];
  });

  const [filters, setFilters] = useState({ title: '', genre: '' });

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  const addMovie = (movie) => {
    setMovies([...movies, { ...movie, id: Date.now(), favorite: false }]);
  };

  const updateMovie = (updatedMovie) => {
    setMovies(movies.map(m => m.id === updatedMovie.id ? updatedMovie : m));
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter(m => m.id !== id));
  };

  const toggleFavorite = (id) => {
    setMovies(movies.map(m => m.id === id ? { ...m, favorite: !m.favorite } : m));
  };

  const filteredMovies = movies.filter(m => 
    m.title.toLowerCase().includes(filters.title.toLowerCase()) &&
    m.genre.toLowerCase().includes(filters.genre.toLowerCase())
  );

  const favoriteMovies = movies.filter(m => m.favorite);

  return {
    movies: filteredMovies,
    favorites: favoriteMovies,
    addMovie,
    updateMovie,
    deleteMovie,
    toggleFavorite,
    filters,
    setFilters,
  };
};

export default useMovies;
