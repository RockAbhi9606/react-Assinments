const SearchComponent = ({ searchInput, setSearchInput }) => {
  return (
    <div className="w-6/12 p-2 rounded-md flex items-center pl-3 shadow-custom">
      <i className="text-gray-400 fa-solid fa-magnifying-glass"></i>
      <input
        className="mx-3 w-full outline-none"
        type="text"
        name="search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search for restaurants and food"
      />
    </div>
  );
};

export default SearchComponent;
