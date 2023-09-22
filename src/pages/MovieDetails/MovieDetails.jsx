import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovies } from 'services/api';
import noImg from 'no-poster.webp';
import {
  GoBack,
  LinkStyled,
  MovieWrap,
  Nav,
  Overview,
  Rating,
  Title,
} from './MovieDetails.style';

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
    <main>
      <GoBack to={goBack.current}>&#11164; Go back</GoBack>
      {!!movie && (
        <div>
          <MovieWrap>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                  : noImg
              }
              alt={movie.title}
            />
            <div>
              <Title>{movie.title}</Title>
              <p>
                Release date:{' '}
                {new Date(movie.release_date).toLocaleDateString('uk-UA')}
              </p>
              <p>Genres: {genres}</p>{' '}
              <Rating>
                Rating: {Math.ceil(movie.vote_average * 10) + '%'}
              </Rating>
              <Overview>{movie.overview}</Overview>
              <Nav>
                <LinkStyled to="cast">Cast</LinkStyled>
                <LinkStyled to="reviews">Reviews</LinkStyled>
              </Nav>
            </div>
          </MovieWrap>
          <Suspense fallback={<p>Loading...</p>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </main>
  );
}
