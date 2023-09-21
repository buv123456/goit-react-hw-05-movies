import { GoBack } from 'components/GoBack';
import { useEffect, useMemo, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import { fetchMovies } from 'services/api';

export default function MovieDetails(props) {
  const [movie, setMovie] = useState(null);
  const [genres, setGenres] = useState('');
  const [path, setPath] = useState('/');
  const { movieId } = useParams();
  const location = useLocation();
  // if (location.state.from) setPath(location.state.from);
  //   path = location.state.from;

  useEffect(() => {
    async function getMovie() {
      const results = await fetchMovies('/movie/' + movieId);
      setMovie(results);
      setGenres(
        results.genres.map(({ name }) => name.toLowerCase()).join(', ')
      );
    }
    getMovie();
  }, [movieId]);

  useEffect(() => {}, []);

  // const getPath = () => {
  //   if (!location.state.from) return;
  //   path = location.state.from;
  // };

  const q = useParams();
  const [w] = useSearchParams();

  console.log('path', path);
  console.log('location', location);
  console.log('q', q);
  console.log('w', w);
  console.log('props', props);
  return (
    <>
      <Link to={path}>&#11164; Go back</Link>;
      {!!movie && (
        <div>
          <img
            src={
              'https://www.themoviedb.org/t/p/w220_and_h330_face/' +
              movie.poster_path
            }
            alt={movie.title}
          />
          <div>
            <h1>{movie.title}</h1>
            <p>
              Release date:{' '}
              {new Date(movie.release_date).toLocaleDateString('uk-UA')}
            </p>
            <p>Genres: {genres}</p>{' '}
            <p>Rating: {Math.ceil(movie.vote_average * 10) + '%'}</p>
            <p>{movie.overview}</p>
          </div>
          <Link to="cast">Team</Link>
          <Link to="reviews">Reviews</Link>
          <Outlet />
        </div>
      )}
    </>
  );
}
