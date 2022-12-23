import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from 'services/api';

export const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const { results } = await getReviewsById(movieId);
      const reviewsData = await results.map(({ author, content, id }) => ({
        author,
        content,
        id,
      }));
      setReviews(reviewsData);
      return;
    };

    getReviews();
  }, [movieId]);

  return (
    <div>
      <div>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(({ author, content, id }) => (
              <li key={id}>
                <h2>{author}</h2>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h2>We don't have any reviews for this movie</h2>
        )}
      </div>
    </div>
  );
};
