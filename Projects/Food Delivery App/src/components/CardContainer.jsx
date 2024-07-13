import { restaurantsListData } from "../utils/restaurantsListData";
import RestrorentCard from "./RestrorentCard";
import SearchComponent from "./SearchComponent";
import "../css/cardContainer.css";

const CardContainer = ({ searchInput, setSearchInput }) => {
  let filteredData = restaurantsListData;
  if (searchInput) {
    filteredData = restaurantsListData.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  }

  return (
    <div className="main-container">
      <SearchComponent setSearchInput={setSearchInput} />
      <div className="location">
        Top Restaurants in <span>Pune</span>&nbsp;
        <span>
          <i className="fa-solid fa-city"></i>
        </span>
      </div>
      <hr />
      <div className="card-container">
        {filteredData.map((restaurant) => {
          return (
            <RestrorentCard
              key={restaurant.info.id}
              restaurantData={restaurant}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardContainer;
