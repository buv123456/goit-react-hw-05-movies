import { Link } from 'react-router-dom';

export default function MovieList({ movies }) {
  return (
    <ul>
      {movies.map(({ id, title, poster_path, vote_average }) => (
        <li key={id}>
          <Link to={'/movies/' + id}>
            <h3>{title}</h3> <p>rating: {Math.ceil(vote_average * 10) + '%'}</p>
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
  );
}
