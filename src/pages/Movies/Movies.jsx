import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovies } from 'services/api';
import { Button, Form, Input } from './Movies.styled';
import MovieList from 'components/MovieList/MovieList';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [foundMovies, setFoundMovies] = useState([]);
  const [queryState, setQueryState] = useState(query);

  useEffect(() => {
    if (!queryState) return;
    async function getMovies() {
      const resp = await fetchMovies(
        `search/movie?query=${queryState}`,
        'results'
      );
      if (resp) setFoundMovies(resp.results);
    }
    getMovies();
  }, [queryState]);

  const handleSubmit = e => {
    e.preventDefault();
    const movieText = e.target.elements.name.value;
    if (!movieText || movieText === queryState) return;
    setQueryState(movieText);
    setSearchParams({ query: movieText });
  };

  return (
    <main>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="add movie name..." />
        <Button type="submit">🔎</Button>
      </Form>
      {foundMovies.length > 0 && <MovieList movies={foundMovies} />}
    </main>
  );
}
