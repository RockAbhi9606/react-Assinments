import { useState, useEffect } from "react";
import RestrorentCard from "./RestrorentCard";
import SearchComponent from "./SearchComponent";
import "../css/cardContainer.css";
import "../css/shimmerCard.css";
import ShimmerCards from "../shimmer/ShimmerCards";

const CardContainer = ({ searchInput, setSearchInput }) => {
  const [filteredData, setFilteredData] = useState("");
  const [isPreset, setIsPresent] = useState(true);

  useEffect(() => {
    if (searchInput) {
      const filter = filteredData.filter((restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())
      );

      filter.length === 0 ? setIsPresent(false) : setIsPresent(true);
      setFilteredData(filter);
    } else {
      filterData();
      setIsPresent(true);
    }
  }, []);

  const filterData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setFilteredData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="main-container">
      <div className="upper-container">
        <SearchComponent
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        <button
          className="filter-Btn"
          onClick={() => {
            const filterData = filteredData.filter(
              (restaurant) => restaurant.info.avgRating >= 4.5
            );
            setFilteredData(filterData);
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="location">
        Top Restaurants in <span>Pune</span>&nbsp;
        <span>
          <i className="fa-solid fa-city"></i>
        </span>
      </div>
      <hr />
      <div className="card-container">
        {isPreset === false ? (
          <h1>Restaurant Not Found</h1>
        ) : filteredData.length === 0 ? (
          <ShimmerCards />
        ) : (
          filteredData.map((restaurant) => {
            return (
              <RestrorentCard
                key={restaurant?.info?.id}
                restaurantData={restaurant}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default CardContainer;
