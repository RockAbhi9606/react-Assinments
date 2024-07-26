import { useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_IMAGES_URL } from "../utils/constant";
import ShimmerMenu from "../shimmer/ShimmerMenu";
import useFetchRestaurentMenu from "../utils/useFetchRestaurentMenu";

const RestaurantMenu = () => {
  const [isExpand, setIsExpand] = useState(true);
  const { resId } = useParams();

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

  const itemCards1 =
    restaurantData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
      ?.card?.card?.itemCards || [];
  const itemCards2 =
    restaurantData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
      ?.card?.card?.itemCards || [];

  const itemCards = [...itemCards1, ...itemCards2];

  return (
    <div className="max-w-[800px] min-h-[800px] pb-7 mt-12 mx-auto mb-0">
      <div className="w-24 p-2 flex items-center gap-2 border-2 border-solid justify-center mb-10 rounded-lg shadow-custom bg-gray-50-200">
        <i className="fa-solid fa-arrow-left"></i>
        <button
          onClick={() => {
            history.back();
          }}
        >
          Back
        </button>
      </div>
      <h1 className="text-2xl font-semibold mb-5 text-[#8b0000]">{name}</h1>
      <div className="px-6 pb-6 bg-custom-gradient rounded-bl-3xl rounded-br-3xl">
        <div className="p-4 border-2 border-solid bg-white rounded-[20px] shadow-sm">
          <div className="flex items-center gap-2 mb-1">
            <i
              className="fa-solid fa-star"
              style={{ color: "#3ce2b0", scale: 1 }}
            ></i>
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
              <p>
                <span className="font-semibold">Outlet</span>&nbsp;&nbsp;
                <span>{slugs?.restaurant}</span>
              </p>
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
      <div>
        <div className="border border-solid bg-gray-400"></div>
        <div className="p-4">
          <button
            onClick={() => {
              if (isExpand) {
                setIsExpand(false);
              } else {
                setIsExpand(true);
              }
            }}
            className="flex justify-between items-center w-full"
          >
            <h3 className="font-bold text-xl">
              Recommended ({itemCards.length})
            </h3>
            {isExpand ? (
              <i className="fa-solid fa-angle-up"></i>
            ) : (
              <i className="fa-solid fa-angle-down"></i>
            )}
          </button>
        </div>
        {!isExpand && <div className="h-2 bg-gray-200"></div>}

        <div className="p-4">
          {isExpand && (
            <div>
              {itemCards &&
                itemCards.map((item) => {
                  const {
                    imageId,
                    ratings,
                    name,
                    id,
                    price,
                    defaultPrice,
                    description,
                    itemAttribute,
                  } = item?.card?.info;
                  return (
                    <div key={id}>
                      <div className="flex items-center justify-between my-5">
                        <div className="w-9/12">
                          <div className="mb-4 flex items-center w-8 h-8">
                            {itemAttribute?.vegClassifier === "VEG" ? (
                              <i className="scale-95 fa-solid fa-circle border-2 border-solid border-green-700 text-green-700 p-1 rounded-md"></i>
                            ) : (
                              <i className=" scale-95 fa-solid fa-circle border-2 border-solid border-red-700 text-red-700 p-1 rounded-md"></i>
                            )}
                          </div>
                          <div className="font-semibold text-lg my-1">
                            {name}
                          </div>
                          <div className="my-1 font-semibold">
                            ₹{price / 100 || defaultPrice / 100}
                          </div>
                          <div className="my-2 flex gap-1 items-center">
                            <i
                              className="fa-solid fa-star"
                              style={{ color: "#21c442" }}
                            ></i>
                            <span className="font-semibold">
                              {ratings?.aggregatedRating?.rating || 0.0}
                            </span>{" "}
                            ({ratings?.aggregatedRating?.ratingCountV2 || 0})
                          </div>
                          <div className="mt-4">{description}</div>
                        </div>
                        <div className="relative">
                          {imageId ? (
                            <img
                              className="w-40 h-40 rounded-2xl"
                              src={MENU_IMAGES_URL + imageId}
                              alt="image"
                            />
                          ) : (
                            <img
                              className="w-40 h-40 rounded-2xl"
                              src="https://i.pinimg.com/736x/55/f8/af/55f8afd0d4c2224653f1ba467b6543e8.jpg"
                              alt="food-images1"
                            />
                          )}
                          <button className="bg-green-400 font-medium text-white p-2 w-28 rounded-lg absolute top-[140px] left-6 shadow-sm">
                            ADD
                          </button>
                        </div>
                      </div>
                      <hr className="border-solid border-gray-500" />
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default RestaurantMenu;
