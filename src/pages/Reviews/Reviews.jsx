import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from 'services/api';

export const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      const { results } = await getReviewsById(movieId);
      const reviewsData = await results.map(({ author, content, url }) => ({
        author,
        content,
      }));
      setReviews(reviewsData);
      return;
    };

    getReviews();
  }, [movieId]);

  return (
    <div>
      <div>
        Reviews
        {reviews.length === 0 ? (
          <h2>No reviews</h2>
        ) : (
          <ul>
            {reviews.map(({ author, content, url }) => (
              <li key={url}>
                <h2>{author}</h2>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
