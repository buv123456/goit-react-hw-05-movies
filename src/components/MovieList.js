import { Link, useLocation } from 'react-router-dom';
import noImg from 'no-poster.webp';

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <main>
      <ul>
        {movies.map(({ id, title, poster_path, vote_average }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <h3>{title}</h3>
              <p>rating: {Math.ceil(vote_average * 10) + '%'}</p>
              <img
                src={
                  poster_path
                    ? 'https://image.tmdb.org/t/p/w500/' + poster_path
                    : noImg
                }
                width="10%"
                alt={title}
              />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
