
import { useMovieContext } from '../context/MovieContext';

export default function Filters() {
  const { filters, setFilters } = useMovieContext();

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex gap-2 mb-4">
      <input className="p-2 border rounded w-1/2" placeholder="Buscar por título" name="title" value={filters.title} onChange={handleChange} />
      <input className="p-2 border rounded w-1/2" placeholder="Buscar por género" name="genre" value={filters.genre} onChange={handleChange} />
    </div>
  );
}
