import css from './SearchBox.module.css';

const SearchBox = ({ filterValue, handleChange }) => {
  return (
    <div className={css.search}>
      <h4>Find contacts by name:</h4>
      <input
        className={css.input}
        type="text"
        placeholder="Search contacts..."
        // necessarily ↓
        value={filterValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
