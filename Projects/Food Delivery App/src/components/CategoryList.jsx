import { useDispatch, useSelector } from "react-redux";
import { MENU_IMAGES_URL } from "../utils/constant";
import { addItems } from "../utils/cartSlice";

const CategoryList = ({ menuItemList }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };

  const getCartItemCount = (itemId) => {
    const item = cartItems.find((cartItem) => cartItem.id === itemId);
    return item;
  };

  return (
    <div>
      {menuItemList &&
        menuItemList.map((item) => {
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
          const itemCount = getCartItemCount(id);
          return (
            <div key={id}>
              <div className="flex items-center justify-between p-4 pb-12 border-solid border-b-2 border-slate-400">
                <div className="w-9/12">
                  <div className="mb-4 flex items-center w-8 h-8">
                    {itemAttribute?.vegClassifier === "VEG" ? (
                      <i className="scale-95 fa-solid fa-circle border-2 border-solid border-green-700 text-green-700 p-1 rounded-md"></i>
                    ) : (
                      <i className="scale-150 fa-solid fa-caret-up border-2 border-solid border-red-600 text-red-700 px-[2px] rounded-[4px]"></i>
                    )}
                  </div>
                  <div className="font-semibold text-lg my-1">{name}</div>
                  <div className="my-1 font-semibold">
                    ₹{price / 100 || defaultPrice / 100}
                  </div>
                  <div className="my-2 flex gap-1 items-center">
                    <i className="text-[#21c442] fa-solid fa-star"></i>
                    <span className="font-semibold">
                      {ratings?.aggregatedRating?.rating || 0.0}
                    </span>{" "}
                    ({ratings?.aggregatedRating?.ratingCountV2 || 0})
                  </div>
                  {<div className="mt-4 mr-4">{description}</div>}
                </div>
                <div className="relative">
                  {imageId ? (
                    <img
                      className="w-40 h-40 rounded-2xl shadow-xl"
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
                  <div>
                    {itemCount === undefined ? (
                      <button
                        className="bg-green-400 font-medium text-white p-2 w-28 rounded-lg absolute top-[140px] left-6 shadow-sm"
                        onClick={() => handleAddItem(item.card.info)}
                      >
                        ADD
                      </button>
                    ) : (
                      <div className="flex justify-evenly bg-green-400 font-medium text-white p-2 w-28 rounded-lg absolute top-[140px] left-6 shadow-sm">
                        <span>
                          <i className="cursor-pointer fa-solid fa-minus"></i>
                        </span>
                        <span className="">{cartItems.length}</span>
                        <span>
                          <i className="cursor-pointer fa-solid fa-plus"></i>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CategoryList;
