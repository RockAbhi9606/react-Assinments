import "../css/restrorentCard.css";
import { CDN_URL } from "../utils/constant";

const RestrorentCard = (props) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    props?.restaurantData?.info;
  return (
    <div className="restrorent-card">
      <div className="badge">{sla?.lastMileTravelString}</div>
      <img
        className="food-image"
        src={CDN_URL + cloudinaryImageId}
        alt="food-images"
      />
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

export default RestrorentCard;
