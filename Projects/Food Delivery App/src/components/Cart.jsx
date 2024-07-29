import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return cartItems.length === 0 ? (
    <EmptyCart />
  ) : (
    <div>
      <main className="max-w-[600px] pb-7 mt-12 mx-auto mb-0 shadow-xl p-4 rounded-lg">
        <div
          className="w-24 p-2 flex items-center gap-2 border-2 border-solid justify-center mb-10 rounded-lg bg-gray-50-200 cursor-pointer bg-green-400 text-white"
          onClick={() => {
            history.back();
          }}
        >
          <i className="fa-solid fa-arrow-left"></i>
          <button>Back</button>
        </div>
        {/* RestaurentInfo */}
        <div className="flex gap-4 border-2 p-2">
          <p>
            <img className="w-16" src="" alt="" />
          </p>
          <p>Restaurent name</p>
        </div>
        {cartItems.map((cartItem) => {
          const { id, itemAttribute, name, price, defaultPrice } = cartItem;
          console.log(cartItem);
          return (
            <div key={id}>
              {/* Add menu list */}
              <div className="py-2 justify-around px-4 flex text-sm">
                <div>
                  {itemAttribute?.vegClassifier === "VEG" ? (
                    <i className="scale-95 fa-solid fa-circle border-2 border-solid border-green-700 text-green-700 p-1 rounded-md"></i>
                  ) : (
                    <i className="scale-95 fa-solid fa-circle border-2 border-solid border-red-700 text-red-700 p-1 rounded-md"></i>
                  )}
                </div>
                <div className="w-64">{name}</div>
                <div className="border border-gray-300 flex items-center px-4 gap-4 h-7">
                  <span>
                    <i className="text-green-700 cursor-pointer fa-solid fa-minus"></i>
                  </span>
                  <span className="text-green-700">{cartItems.length}</span>
                  <span>
                    <i className="text-green-700 cursor-pointer fa-solid fa-plus"></i>
                  </span>
                </div>
                <div>₹{price / 100 || defaultPrice / 100}</div>
              </div>
              <hr />
            </div>
          );
        })}
        {/* total */}
        <div>
          <hr className="border-gray-400" />
          <div className="mx-10 mt-4 font-bold flex justify-between pb-5 ">
            <label className="mx-16">Total</label>
            <p>Total</p>
          </div>
          <hr className="border-gray-400" />
        </div>

        {/* Bill details */}
        <div className="px-14 mt-6">
          <p className="font-medium text-base mb-5">Bill Details</p>
          <div className="flex items-center justify-between text-xs">
            <p>Total Items</p>
            <p>0</p>
          </div>
          <div className="flex items-center justify-between text-xs my-2">
            <p>
              Delivery Fee | <span>1.3 kms</span>
            </p>
            <p>0</p>
          </div>
          <div className="flex items-center justify-between text-xs">
            <p>GST and Restaurant Charges</p>
            <p>0</p>
          </div>
          <hr className="border-gray-400 my-6" />
          {/* To pay */}
          <div className="flex justify-between">
            <p className="font-semibold text-xl">To Pay</p>
            <p className="font-semibold text-xl">Total</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
