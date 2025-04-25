
import { useMovieContext } from '../context/MovieContext';

export default function Favorites() {
  const { favorites } = useMovieContext();

  return (
    <div className="mt-6">
      <h3 className="text-2xl font-bold mb-2">🎬 Favoritas</h3>
      <div className="space-y-2">
        {favorites.map(f => (
          <div key={f.id} className="p-2 bg-yellow-100 rounded shadow">
            <p className="font-semibold">{f.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
