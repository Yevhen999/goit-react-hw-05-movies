import { Link } from 'react-router-dom';

export const AdditionalInfo = () => {
  return (
    <div
      style={{
        border: '1px tomato solid',
        marginTop: '10px',
        padding: '15px',
      }}
    >
      <h2>Additional info</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </div>
  );
};
