import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'services/api';
import noImg from 'no-photo.png';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getCast() {
      const results = await fetchMovies(`/movie/${movieId}/credits`, 'cast');
      setCast(results.cast);
    }
    getCast();
  }, [movieId]);

  console.log('cast', cast, cast.length);
  if (!cast.length) return <p>There is no data.</p>;

  return (
    !!cast.length && (
      <ul>
        {cast.map(({ id, name, profile_path, character }) => (
          <li key={id}>
            <h3>{name}</h3>
            {
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                    : noImg
                }
                width="10%"
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
