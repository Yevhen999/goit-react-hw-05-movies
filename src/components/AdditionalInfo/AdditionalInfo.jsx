import { Link, useLocation } from 'react-router-dom';
import css from './AdditionalInfo.module.css';

const AdditionalInfo = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  return (
    <div className={css.wrap}>
      <h2>Additional info</h2>
      <ul>
        <li>
          <Link to="cast" state={{ from: backLinkHref }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdditionalInfo;
