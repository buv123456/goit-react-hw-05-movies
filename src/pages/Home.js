import { useEffect, useState } from 'react';
import MovieList from 'components/MovieList';
import { fetchMovies } from 'services/api';
// import { LoadMore } from 'components/LoadMore';

export default function Home() {
  const [trends, setTrends] = useState([]);
  const [page, setPage] = useState(1);
  const [totalMovies, setTotalMovies] = useState(0);

  useEffect(() => {
    async function fetchTrendMovie() {
      const resp = await fetchMovies('/trending/movie/day', page);
      resp.page === 1
        ? setTrends(resp.results)
        : setTrends(prev => [...prev, ...resp.results]);

      setTotalMovies(resp.total_results);
    }
    fetchTrendMovie();
  }, [page]);

  const isLoadMore = totalMovies / trends.length > 1;

  return (
    <div>
      {!!trends && (
        <MovieList
          movies={trends}
          onLoadMore={() => setPage(prev => prev + 1)}
          isLoadMore={isLoadMore}
          fromURL="/"
        />
      )}
    </div>
  );
}
