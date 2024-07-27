import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  useEffect(() => {
    imageData();
  }, []);
  const imageData = async () => {
    const response = await fetch(
      CDN_URL + props.restaurantData.info.cloudinaryImageId
    );
    if (response.ok) {
      setImageExists(true);
    } else {
      setImageExists(false);
    }
  };

  const [imageExists, setImageExists] = useState(true);
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    props?.restaurantData?.info;

  return (
    <div className="card hover:shadow-custom hover:translate-y-[-5px] duration-300 ease-in-out max-w-72 h-[340px] rounded-xl relative">
      <div className="badge">{sla?.lastMileTravelString}</div>
      {imageExists ? (
        <img
          className="w-full p-2 h-48 rounded-xl"
          src={CDN_URL + cloudinaryImageId}
          alt="food-images"
        />
      ) : (
        <img
          className="w-full p-2 h-52 rounded-xl"
          src="https://i.pinimg.com/736x/55/f8/af/55f8afd0d4c2224653f1ba467b6543e8.jpg"
          alt="food-images1"
        />
      )}
      <div className="px-3">
        <h2 className="text-lg mb-2 font-semibold">{name}</h2>
        <p className="text-[12px] mt-1">{cuisines.join(", ")}</p>
        <div className="mt-5 text-[14px] flex items-center justify-evenly">
          <div
            className={`flex items-center outline-none rounded-sm px-1 text-white rating ${
              avgRating >= 4
                ? "bg-green-700"
                : avgRating >= 3
                ? "bg-orange-500"
                : "bg-red-700"
            }`}
          >
            <div className="pr-1 py-[2px]">
              <i className="scale-75 fa-solid fa-star"></i> {avgRating}
            </div>
          </div>
          <i className="scale-[0.25] fa-solid fa-circle"></i>
          <p>{sla?.slaString}</p>
          <i className="scale-[0.25] fa-solid fa-circle"></i>
          <p>{costForTwo}</p>
        </div>
      </div>
    </div>
  );
};

export const withDiscountedLabel = (RestaurantCard) => {
  return (props) => {
    const { aggregatedDiscountInfoV3 } = props?.restaurantData?.info;
    const header = aggregatedDiscountInfoV3?.header || "";
    const subHeader = aggregatedDiscountInfoV3?.subHeader || "";
    return (
      <>
        <div className="relative z-10 top-44 left-3 text-xl text-white font-extrabold bg-discount-gradient w-[260px] px-2">
          {header + " " + subHeader}
        </div>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
