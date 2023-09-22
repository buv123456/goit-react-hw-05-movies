import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovies } from 'services/api';
import noImg from 'no-poster.webp';
import { MovieDetailsS } from './MovieDetailsS.style';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [genres, setGenres] = useState('');
  const { movieId } = useParams();

  const location = useLocation();
  const goBack = useRef(location?.state?.from ?? '/');

  useEffect(() => {
    async function getMovie() {
      const results = await fetchMovies(`/movie/${movieId}`);
      if (results) {
        setMovie(results);
        setGenres(
          results.genres.map(({ name }) => name.toLowerCase()).join(', ')
        );
      }
    }
    getMovie();
  }, [movieId]);

  return (
    <>
      <Link to={goBack.current}>&#11164; Go back</Link>;
      {!!movie && (
        <div>
          <MovieDetailsS>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                  : noImg
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
              <Link to="cast">Team</Link>
              <Link to="reviews">Reviews</Link>
            </div>
          </MovieDetailsS>
          <Suspense fallback={<p>Loading...</p>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
}