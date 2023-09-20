import { LoadMore } from 'components/LoadMore';
import MovieList from 'components/MovieList';
import { useEffect, useState } from 'react';
import { Form, Link, Outlet, useSearchParams } from 'react-router-dom';
import { fetchMovies } from 'services/api';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [foundMovies, setFoundMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalMovies, setTotalMovies] = useState(0);
  const [queryState, setQueryState] = useState(query);

  useEffect(() => {
    if (!query) return;
    async function getMovies() {
      const resp = await fetchMovies('search/movie?query=' + query, page);
      const sortedMovies = resp.results.sort(
        (a, b) => b.popularity - a.popularity
      );
      setTotalMovies(resp.total_results);
      setFoundMovies(prev => [...prev, ...sortedMovies]);
    }
    getMovies();
  }, [query, page]);

  const handleSubmit = e => {
    e.preventDefault();
    const movieText = e.target.elements.name.value;
    if (!movieText || movieText === queryState) return;
    setFoundMovies([]);
    setPage(1);
    setQueryState(movieText);
    setSearchParams({ query: movieText });
  };

  const loadMore = totalMovies / foundMovies.length > 1;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="add movie name..." />
        <button type="submit">search</button>
      </form>
      {!!foundMovies.length && <MovieList movies={foundMovies} />}
      {loadMore && <LoadMore onClick={() => setPage(prev => prev + 1)} />}
    </div>
  );
}
