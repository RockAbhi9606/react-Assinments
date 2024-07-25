import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import SearchComponent from "./SearchComponent";
import "../css/cardContainer.css";
import "../css/shimmerCard.css";
import ShimmerCards from "../shimmer/ShimmerCards";
import { Link, useOutletContext } from "react-router-dom";
import useOnlineOfflineStatus from "../utils/useOnlineOfflineStatus";
import useFetchRestaurents from "../utils/useFetchRestaurents";

const CardContainer = () => {
  const { searchInput, setSearchInput } = useOutletContext();
  const [filteredData, setFilteredData] = useState("");
  const [originalData, setOriginalData] = useState("");
  const [isPreset, setIsPresent] = useState(true);
  const onlineStatus = useOnlineOfflineStatus();

  const resListData = useFetchRestaurents();

  useEffect(() => {
    //if (resListData.length > 0) {
      setFilteredData(resListData);
      setOriginalData(resListData);
    //}
  }, [resListData]);

  useEffect(() => {
    if (searchInput) {
      const filter = originalData.filter((restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())
      );

      filter.length === 0 ? setIsPresent(false) : setIsPresent(true);
      setFilteredData(filter);
    } else {
      setFilteredData(originalData);
      setIsPresent(true);
    }
  }, [searchInput]);

  if (onlineStatus === false) {
    return <h1>You'r offline,Please Check your Internet Connection!</h1>;
  }

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
            debugger;
            const filterData = originalData.filter(
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
      <hr className="card-container-horizontal-lines" />
      <div className="card-container">
        {isPreset === false ? (
          <h1>Restaurant Not Found</h1>
        ) : filteredData.length === 0 ? (
          <ShimmerCards />
        ) : (
          filteredData.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              <RestaurantCard restaurantData={restaurant} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default CardContainer;
