import { Link, useLocation } from 'react-router-dom';
import { LoadMore } from './LoadMore';

export default function MovieList({ movies, isLoadMore, onLoadMore }) {
  const location = useLocation();
  return (
    <div>
      <ul>
        {movies.map(({ id, title, poster_path, vote_average }) => (
          <li key={id}>
            <Link to={'/movies/' + id} state={{ from: location }}>
              <h3>{title}</h3>
              <p>rating: {Math.ceil(vote_average * 10) + '%'}</p>
              <img
                src={
                  'https://www.themoviedb.org/t/p/w220_and_h330_face/' +
                  poster_path
                }
                alt={title}
              />
            </Link>
          </li>
        ))}
      </ul>
      {isLoadMore && <LoadMore onClick={onLoadMore} />}
    </div>
  );
}
