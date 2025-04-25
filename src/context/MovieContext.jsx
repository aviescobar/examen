
import { createContext, useContext } from 'react';
import useMovies from '../hooks/useMovies';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const movieData = useMovies();
  return (
    <MovieContext.Provider value={movieData}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);
