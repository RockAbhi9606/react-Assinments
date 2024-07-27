import { useParams } from "react-router-dom";
import ShimmerMenu from "../shimmer/ShimmerMenu";
import useFetchRestaurentMenu from "../utils/useFetchRestaurentMenu";
import RestaurentCatagories from "./RestaurentCatagories";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showItemIndex, setShowItemIndex] = useState(0);
  const [isExpand, setIsExpand] = useState(true);
  const restaurantData = useFetchRestaurentMenu(resId);

  if (restaurantData === null) {
    return <ShimmerMenu />;
  }

  const {
    name,
    cuisines,
    avgRating,
    costForTwoMessage,
    sla,
    totalRatingsString,
    slugs,
  } = restaurantData?.cards[2]?.card?.card?.info;

  const categories =
    restaurantData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="max-w-[800px] min-h-[800px] pb-7 mt-12 mx-auto mb-0">
      <div
        className="w-24 p-2 flex items-center gap-2 border-2 border-solid justify-center mb-10 rounded-lg shadow-custom bg-gray-50-200 cursor-pointer"
        onClick={() => {
          history.back();
        }}
      >
        <i className="fa-solid fa-arrow-left"></i>
        <button>Back</button>
      </div>
      <h1 className="text-2xl font-semibold mb-5 text-[#8b0000]">{name}</h1>
      <div className="px-6 pb-6 bg-custom-gradient rounded-bl-3xl rounded-br-3xl">
        <div className="p-4 border-2 border-solid bg-white rounded-[20px] shadow-sm">
          <div className="flex items-center gap-2 mb-1 font-semibold">
            <i className="text-[#21b853] scale-100 fa-solid fa-star"></i>
            <p>
              {avgRating} ({totalRatingsString})
            </p>
            <i className="scale-50 dot fa-solid fa-circle"></i>
            <p>{costForTwoMessage}</p>
          </div>
          <div className="text-red-500 font-semibold underline mb-4">
            <p>{cuisines?.join(", ")}</p>
          </div>
          <div className="flex gap-4 items-center mb-4">
            <div className="flex flex-col items-center mt-[1px]">
              <div className="w-2 h-2 rounded-full bg-[#c4c4c4]"></div>
              <div className="w-[1px] h-9 bg-[#c4c4c4]"></div>
              <div className="w-2 h-2 rounded-full bg-[#c4c4c4]"></div>
            </div>
            <div>
              <span className="font-semibold">Outlet</span>&nbsp;&nbsp;
              <span>{slugs?.restaurant}</span>
              <p className="mt-4 font-semibold">{sla?.slaString}</p>
            </div>
          </div>
          <hr className="border-solid border-gray-400" />
          <div className="flex items-center p-2 pb-0 gap-3">
            <i className="scale-125 fa-solid fa-bicycle"></i>
            <p className="font-semibold">{sla.lastMileTravelString}</p>
            <span className="font-semibold">| ₹49 Delivery fee will apply</span>
          </div>
        </div>
      </div>
      <div className="text-center my-6 text-amber-800 text-3xl">
        <p>MENU</p>
      </div>
      {categories.map((category, index) => {
        debugger;
        return (
          <RestaurentCatagories
            key={category?.card?.card?.title}
            categories={category?.card?.card}
            isExpand={index === showItemIndex && isExpand}
            setShowItemIndex={() => setShowItemIndex(index)}
            setIsExpand={setIsExpand}
          />
        );
      })}
    </div>
  );
};
export default RestaurantMenu;
