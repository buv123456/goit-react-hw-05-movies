import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'services/api';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function getCast() {
      const results = await fetchMovies('/movie/' + movieId + '/credits');

      setCast(results.cast);
    }
    getCast();
  }, [movieId]);
  console.log(cast);
  return (
    !!cast && (
      <ul>
        {cast
          .filter(i => !!i.profile_path)
          .map(({ id, name, profile_path, character }) => (
            <li key={id}>
              <h3>{name}</h3>
              {
                <img
                  src={
                    'https://www.themoviedb.org/t/p/w138_and_h175_face' +
                    profile_path
                  }
                  width="10%"
                  min-height="300"
                  alt={name}
                />
              }
              <p>as {character}</p>
            </li>
          ))}
      </ul>
    )
  );
}
