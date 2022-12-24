import PropTypes from 'prop-types';
import css from './SearchBox.module.css';

const SearchBox = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target.name;
    onSubmit(value);
  };

  return (
    <div className={css.formWrap}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          placeholder="Type the movie name"
          type="text"
          name="name"
        />
        <button className={css.searchButton} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
