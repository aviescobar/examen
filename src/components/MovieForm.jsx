
import { useState } from 'react';
import { useMovieContext } from '../context/MovieContext';

export default function MovieForm() {
  const { addMovie } = useMovieContext();
  const [form, setForm] = useState({ title: '', description: '', genre: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.title && form.description && form.genre) {
      addMovie(form);
      setForm({ title: '', description: '', genre: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow space-y-2">
      <input className="w-full p-2 border rounded" name="title" placeholder="Título" value={form.title} onChange={handleChange} />
      <input className="w-full p-2 border rounded" name="description" placeholder="Descripción" value={form.description} onChange={handleChange} />
      <input className="w-full p-2 border rounded" name="genre" placeholder="Género" value={form.genre} onChange={handleChange} />
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Agregar Película</button>
    </form>
  );
}
