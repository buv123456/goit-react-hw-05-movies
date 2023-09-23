import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'services/api';
import { TextSt } from '../Cast/Cast.styled';
import { ReviewItem } from './Reviews.styled';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      const results = await fetchMovies(`/movie/${movieId}/reviews`, 'results');
      if (results) setReviews(results.results);
    }
    getReviews();
  }, [movieId]);

  if (reviews.length <= 0) return <TextSt>There are no reviews yet.</TextSt>;

  return (
    <ul>
      {reviews.map(({ id, author, content, created_at }) => (
        <ReviewItem key={id}>
          <h3>{author}</h3>
          {<p>{new Date(created_at).toLocaleDateString('uk-UA')}</p>}
          <p>{content}</p>
        </ReviewItem>
      ))}
    </ul>
  );
}
