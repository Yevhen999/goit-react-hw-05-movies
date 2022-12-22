import { Link } from 'react-router-dom';

export const AdditionalInfo = () => {
  return (
    <ul style={{ border: '1px tomato solid' }}>
      <li>
        <Link to="cast">Cast</Link>
      </li>
      <li>
        <Link to="reviews">Reviews</Link>
      </li>
    </ul>
  );
};
