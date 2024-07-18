import "../css/searchComponent.css";

const SearchComponent = ({searchInput, setSearchInput }) => {
  return (
    <div className="seach-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        name="search"
        id="search-input"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search for restaurants and food"
      />
    </div>
  );
};

export default SearchComponent;
