import PropTypes from 'prop-types';

const SearchBox = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target.name;
    onSubmit(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
