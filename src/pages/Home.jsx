import { useEffect, useState } from 'react';
import MovieList from 'components/MovieList';
import { fetchMovies } from 'services/api';

export default function Home() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    async function fetchTrendMovie() {
      const resp = await fetchMovies('/trending/movie/day', 'results');
      if (resp) setTrends(resp.results);
    }
    fetchTrendMovie();
  }, []);

  return <main>{trends.length>0 && <MovieList movies={trends} />}</main>;
}
