
import { useMovieContext } from '../context/MovieContext';

export default function MovieList() {
  const { movies, deleteMovie, toggleFavorite } = useMovieContext();

  return (
    <div className="space-y-4">
      {movies.map(movie => (
        <div key={movie.id} className="p-4 border rounded shadow bg-white">
          <h2 className="text-xl font-bold">{movie.title}</h2>
          <p>{movie.description}</p>
          <p className="italic text-sm">Género: {movie.genre}</p>
          <div className="mt-2 flex gap-2">
            <button className="text-red-600" onClick={() => deleteMovie(movie.id)}>Eliminar</button>
            <button className="text-yellow-500" onClick={() => toggleFavorite(movie.id)}>
              {movie.favorite ? 'Quitar de Favoritos' : 'Marcar como Favorita'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
