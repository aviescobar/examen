
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import Favorites from './components/Favorites';
import Filters from './components/Filters';
import { MovieProvider } from './context/MovieContext';

export default function App() {
  return (
    <MovieProvider>
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center text-blue-700"> Gestor de Películas</h1>
        <MovieForm />
        <Filters />
        <MovieList />
        <Favorites />
      </div>
    </MovieProvider>
  );
}
