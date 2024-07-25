import { useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_IMAGES_URL, MENU_URL } from "../utils/constant";
import "../css/restaurantMenu.css";
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
    <div className="menu-container">
      <h1 className="title">{name}</h1>
      <div className="restaurant-info-container">
        <div className="restaurent-info">
          <div className="rating-container">
            <i
              className="fa-solid fa-star"
              style={{ color: "#3ce2b0", scale: 1 }}
            ></i>
            <p>
              {avgRating} ({totalRatingsString})
            </p>
            <i className="dot fa-solid fa-circle"></i>
            <p>{costForTwoMessage}</p>
          </div>
          <div className="cuisins-container">
            <p>{cuisines?.join(", ")}</p>
          </div>
          <div className="outer-container">
            <div className="sc-dfzyxB kFRNmn">
              <div className="sc-fSjEuY cCGtSc"></div>
              <div className="sc-jgOsrn jvmEWX"></div>
              <div className="sc-fSjEuY cCGtSc"></div>
            </div>
            <div className="travel-distance">
              <p>
                Outlet&nbsp;&nbsp;<span>{slugs?.restaurant}</span>
              </p>
              <p>{sla?.slaString}</p>
            </div>
          </div>
          <hr className="menu-hr" />
          <div className="total-distance">
            <i className="fa-solid fa-bicycle"></i>
            <p>{sla.lastMileTravelString}</p>
            <span>| ₹49 Delivery fee will apply</span>
          </div>
        </div>
      </div>

      <div className="expand-menu-title">
        <p>MENU</p>
      </div>

      <div className="recomanded-menu">
        <div className="upper"></div>
        <div className="recomanded-menu-container">
          <button
            onClick={() => {
              if (isExpand) {
                setIsExpand(false);
              } else {
                setIsExpand(true);
              }
            }}
            className="recomanded-btn"
          >
            <h3>Recommended ({itemCards.length})</h3>
            {isExpand ? (
              <i className="fa-solid fa-angle-up"></i>
            ) : (
              <i className="fa-solid fa-angle-down"></i>
            )}
          </button>
        </div>
        {!isExpand && <div className="lower"></div>}

        <div className="expand-menu">
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
                    <div className="expand-main-container" key={id}>
                      <div className="inner-expand-main">
                        <div className="inner-expand-main-menu">
                          <div className="expand-veg-nonveg-image">
                            {itemAttribute.vegClassifier === "VEG" ? (
                              <i
                                className="veg fa-solid fa-circle"
                                style={{ color: "green" }}
                              ></i>
                            ) : (
                              <i
                                className="non-veg fa-solid fa-circle"
                                style={{ color: "red" }}
                              ></i>
                            )}
                          </div>
                          <div className="expand-main-menu-title">{name}</div>
                          <div className="expand-main-menu-price">
                            ₹{price / 100 || defaultPrice / 100}
                          </div>
                          <div className="expand-main-menu-ratings">
                            <i
                              className="fa-solid fa-star"
                              style={{ color: "#21c442" }}
                            ></i>
                            <span>
                              {ratings?.aggregatedRating?.rating || 0.0}
                            </span>{" "}
                            ({ratings?.aggregatedRating?.ratingCountV2 || 0})
                          </div>
                          <div className="expand-main-menu-discription">
                            {description}
                          </div>
                        </div>
                        <div className="inner-expand-main-menu-image">
                          {imageId ? (
                            <img src={MENU_IMAGES_URL + imageId} alt="image" />
                          ) : (
                            <img
                              className="expand-default-image"
                              src="https://i.pinimg.com/736x/55/f8/af/55f8afd0d4c2224653f1ba467b6543e8.jpg"
                              alt="food-images1"
                            />
                          )}
                          <button className="expand-add-btn">ADD</button>
                        </div>
                      </div>
                      <hr className="main-menu-end-horizontal-line" />
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
