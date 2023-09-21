import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'services/api';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      const results = await fetchMovies(`/movie/${movieId}/reviews`, 'results');
      setReviews(results.results);
    }
    getReviews();
  }, [movieId]);

  if (!reviews.length) return <p>There are no reviews yet.</p>;

  return (
    !!reviews.length && (
      <ul>
        {reviews.map(({ id, author, content, created_at }) => (
          <li key={id}>
            <h3>{author}</h3>
            {<p>{new Date(created_at).toLocaleDateString('uk-UA')}</p>}
            <p>{content}</p>
          </li>
        ))}
      </ul>
    )
  );
}
