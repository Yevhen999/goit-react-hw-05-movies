const SearchBox = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target.name;
    // console.log(value);
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
