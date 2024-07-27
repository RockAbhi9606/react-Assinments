import { useState, useEffect, useContext } from "react";
import RestaurantCard, { withDiscountedLabel } from "./RestaurantCard";
import SearchComponent from "./SearchComponent";
import ShimmerCards from "../shimmer/ShimmerCards";
import { Link, useOutletContext } from "react-router-dom";
import useOnlineOfflineStatus from "../utils/useOnlineOfflineStatus";
import useFetchRestaurents from "../utils/useFetchRestaurents";
import UserContext from "../utils/useContext";

const CardContainer = () => {
  const { searchInput, setSearchInput } = useOutletContext();
  const [filteredData, setFilteredData] = useState("");
  const [originalData, setOriginalData] = useState("");
  const [isPreset, setIsPresent] = useState(true);
  const onlineStatus = useOnlineOfflineStatus();
  const resListData = useFetchRestaurents();
  const DiscountLabelRestaurent = withDiscountedLabel(RestaurantCard);

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

  //const { loggedInUser, setUserName } = useContext(UserContext);

  return (
    <div className="mx-auto relative">
      <div className="flex my-12 w-4/5 justify-center mx-auto gap-10">
        <SearchComponent
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        <button
          className="w-6/12 bg-red-400 text-white rounded-md"
          onClick={() => {
            const filterData = originalData.filter(
              (restaurant) => restaurant.info.avgRating >= 4.5
            );
            setFilteredData(filterData);
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div>
        <label>Input</label>
        {/* <input
          className="border-2 px-2"
          type="text"
          value={loggedInUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        /> */}
      </div>
      <div className="absolute text-3xl left-36 text-red-600">
        Top Restaurants in <span className="text-red-900">Pune</span>&nbsp;
        <span>
          <i className="fa-solid fa-city"></i>
        </span>
      </div>
      <hr className="relative top-12 border-1 border-red-200 border-solid mx-36 mb-6" />
      <div className="grid gap-12 justify-center grid-cols-auto-fit-250 px-32 py-16">
        {isPreset === false ? (
          <h1 className="text-5xl text-center py-12">Restaurant Not Found</h1>
        ) : filteredData.length === 0 ? (
          <ShimmerCards />
        ) : (
          filteredData.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              {restaurant.info.aggregatedDiscountInfoV3 === undefined ? (
                <>
                  <div className="mt-7"></div>
                  <RestaurantCard restaurantData={restaurant} />
                </>
              ) : (
                <DiscountLabelRestaurent restaurantData={restaurant} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default CardContainer;
