import { useLocation } from 'react-router-dom';
import noImg from 'images/no-poster.webp';
import { ListItem, List, Card, Title, Rating, Poster } from './MovieList.style';

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <List>
      {movies.map(({ id, title, poster_path, vote_average }) => (
        <ListItem key={id}>
          <Card to={`/movies/${id}`} state={{ from: location }}>
            <Title>{title}</Title>
            <Rating>{Math.ceil(vote_average * 10)}</Rating>
            <Poster
              src={
                poster_path
                  ? 'https://image.tmdb.org/t/p/w500/' + poster_path
                  : noImg
              }
              width="100%"
              alt={title}
            />
          </Card>
        </ListItem>
      ))}
    </List>
  );
}
