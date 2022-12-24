import { NavLink, useLocation } from 'react-router-dom';
import css from './AdditionalInfo.module.css';

const AdditionalInfo = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  return (
    <div className={css.wrap}>
      <h2>Additional info</h2>
      <ul className={css.listAdditionalInfo}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? css.activeListLink : css.listLink
            }
            to="cast"
            state={{ from: backLinkHref }}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? css.activeListLink : css.listLink
            }
            to="reviews"
            state={{ from: backLinkHref }}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdditionalInfo;
