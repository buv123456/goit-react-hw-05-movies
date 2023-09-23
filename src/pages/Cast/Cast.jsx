import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'services/api';
import noImg from 'images/no-photo.png';
import { List, Photo, Profile, Text, TextSt, Title } from './Cast.styled';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getCast() {
      const results = await fetchMovies(`/movie/${movieId}/credits`, 'cast');
      if (results) setCast(results.cast);
    }
    getCast();
  }, [movieId]);

  return cast.length > 0 ? (
    <List>
      {cast.map(({ id, name, profile_path, character }) => (
        <Profile key={id}>
          <Title>{name}</Title>
          {
            <Photo
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                  : noImg
              }
              width="100%"
              alt={name}
            />
          }
          <Text>as {character}</Text>
        </Profile>
      ))}
    </List>
  ) : (
    <TextSt>There is no data.</TextSt>
  );
}
