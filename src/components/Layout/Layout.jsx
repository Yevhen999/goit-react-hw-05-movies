import css from './Layout.module.css';

export const Layout = () => {
  return (
    <ul className={css.navList}>
      <li className={css.navListItem}>
        <a href="/" className={css.navListLink}>
          Home
        </a>
      </li>
      <li className={css.navListItem}>
        <a href="/" className={css.navListLink}>
          Movies
        </a>
      </li>
    </ul>
  );
};
