import './SearchBar.css';

const SearchBar = ({ searchText, setSearchText }) => (
  <form className="search-container">
    <input
      className="input"
      type="text"
      value={searchText}
      onChange={e => setSearchText(e.target.value)}
    />
    <input className="search-icon" />
  </form>
);

export default SearchBar;
