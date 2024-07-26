import { useEffect, useState } from "react";
import "../css/restrorentCard.css";
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
    <div className="restrorent-card">
      <div className="badge">{sla?.lastMileTravelString}</div>
      {imageExists ? (
        <img
          className="food-image"
          src={CDN_URL + cloudinaryImageId}
          alt="food-images"
        />
      ) : (
        <img
          className="food-image"
          src="https://i.pinimg.com/736x/55/f8/af/55f8afd0d4c2224653f1ba467b6543e8.jpg"
          alt="food-images1"
        />
      )}
      <div className="card-inner-info">
        <h2>{name}</h2>
        <p>{cuisines.join(", ")}</p>
        <div className="rating-distance-avgBill">
          <p
            className={`rating ${
              avgRating >= 4
                ? ""
                : avgRating >= 3
                ? "good-rating"
                : "poor-rating"
            }`}
          >
            <i className="fa-solid fa-star"></i> {avgRating}
          </p>
          <i className="fa-solid fa-circle"></i>
          <p>{sla?.slaString}</p>
          <i className="fa-solid fa-circle"></i>
          <p>{costForTwo}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
