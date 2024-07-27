import { useState } from "react";
import CategoryList from "./CategoryList";

const RestaurentCatagories = ({ categories, isExpand, setShowItemIndex,setIsExpand }) => {
  // const [isExpand, setIsExpand] = useState(true);
  const { title, itemCards } = categories;
  return (
    <div>
      <div className="border border-solid bg-gray-400"></div>
      <div className="p-4">
        <button
          onClick={() => {
            debugger
            setShowItemIndex();
            setIsExpand(!isExpand);
          }}
          className="flex justify-between items-center w-full"
        >
          <h3 className="font-bold text-xl">
            {title} ({itemCards.length})
          </h3>
          {isExpand ? (
            <i className="fa-solid fa-angle-up"></i>
          ) : (
            <i className="fa-solid fa-angle-down"></i>
          )}
        </button>
      </div>
      {!isExpand && <div className="h-2 bg-gray-200"></div>}

      {isExpand && <CategoryList menuItemList={categories.itemCards} />}
    </div>
  );
};

export default RestaurentCatagories;
