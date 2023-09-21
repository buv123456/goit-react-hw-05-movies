// import { LoadMore } from 'components/LoadMore';
import MovieList from 'components/MovieList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovies } from 'services/api';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [foundMovies, setFoundMovies] = useState([]);
  const [queryState, setQueryState] = useState('');

  useEffect(() => {
    if (!queryState && !query) return;
    const q = query || queryState;
    async function getMovies() {
      const resp = await fetchMovies(`search/movie?query=${q}`, 'results');
      setFoundMovies(resp.results);
    }
    getMovies();
  }, [query, queryState]);

  const handleSubmit = e => {
    e.preventDefault();
    const movieText = e.target.elements.name.value;
    if (!movieText || movieText === queryState) return;
    setFoundMovies([]);
    setQueryState(movieText);
    setSearchParams({ query: movieText });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="add movie name..." />
        <button type="submit">search</button>
      </form>
      {!!foundMovies.length && <MovieList movies={foundMovies} />}
    </div>
  );
}
